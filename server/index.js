const express = require("express");
const mysql = require("mysql");
const app = express();
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

function decode(token) {
  return new Promise((resolve, reject) => { 
    jwt.verify(token, "CTF", (err, decode) => {
      if (err) {
        reject(err);
      } else {
        resolve(decode) ;
      }
    });
  });
}
function querydatabase(sql, params) {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

dotenv.config({ path: "./.env" });
app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

db.connect((error) => {
  if (error) throw error;
  console.log("Mysql server started");
});

// app.get('/',(req,res)=>{
//     const sql = "show tables"
//     db.query(sql,(err,result)=>{
//         if(err) throw err;
//         res.send(result)
//     })
// })
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get(
  "/",
  async (req, res, next) => {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) {
      return res.json({ msg: "Not authorized" });
    } else {
      // jwt.verify(token,'CTF',(err,decode)=>{
      //     if(err){
      //         return res.json({"Error":err});
      //     }else{
      //         req.username = decode.username ;
      //         next();

      //     }
      // })
      const dec = await decode(token);
      req.username = dec.username;
      next();
    }
  },
  (req, res) => {
    return res.json({ Status: "Success", username: req.username });
  }
);

app.post("/login", async (req, res)  => {
  const user = req.body.username;
  const pass = req.body.password;
  const sql = "select username,password from users where username=?";
  const result = await querydatabase(sql, [user, pass]);
  if (result.length > 0) {
    bcrypt.compare(pass.toString(), result[0].password, (err, response) => {
      console.log(result[0].password);
      if (err) return response.json({ Error: "Password mismatch error" });
      if (response) {
        const username = result[0].username;
        const token = jwt.sign({ username }, "CTF", { expiresIn: "1d" });
        res.cookie("token", token);
        return res.json({ Login: true });
      } else {
        return res.json({ Login: false }); 
      }
    });
  } else {
    return res.json({ Error: "No such record found" });
  }
});

app.post("/valid", async (req, res) => {
  const flag = req.body.flag;
  const problem = req.body.ProblemName;
  const token = req.cookies.token;
  let username;
  if (!token) {
    console.log(token);
    return res.json({ msg: "Loogin" });
  } else {
    // jwt.verify(token,'CTF',(err,decode)=>{
    //     if(err) throw err;
    //     username = decode.username;
    //     console.log(username);
    // })
    const dec = await decode(token);
    username = dec.username;
    // console.log(problem+":"+flag);
    const sql = "select * from Problem where problem_name = ? ";

    const result = await querydatabase(sql, [problem, flag]);
    const category = result[0].category_name;
    const point = result[0].points;
    // console.log(flag);
    if (result[0].answer === flag) {
      const solvecheck =
        "select * from solves where username = ? and problem_name = ? ";
      const result = await querydatabase(solvecheck, [username, problem]);
      // console.log(result.length===0);
      if (result.length === 0) {
        const pointupdate = "call pointupdate(?,?,?)";
        const update = "insert into solves (username,problem_name) values (?)";
        const values = [username, problem];

        const modify = await querydatabase(update, [values]);
        db.query(pointupdate, [point, username, category], (err, updated) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Entry updated");
          }
        });
      }

    } else if(result.length>0) {
      return res.json({ flag: false });
    }

    return res.json({flag:true });
  }
});

app.get("/count", async (req, res) => {
  const token = req.cookies.token;
  let username;
  if (!token) {
    return res.json({ msg: "NOT AUTHORIZED" });
  } else {
    const dec = await decode(token);
    username = dec.username;

    const sql = "call counttotalproblemssolved(?,?)";
    // const forensicbehindsql  = "call countbeatsF(?)";
    // const webbehindsql = "call countbeatsW(?)";
    // const cryptbehindsql = "call countbeatsC(?)";
    // const total = "select totalcountofuser()";
    const beatpercentageFsql = "select beatpercentage(?,?)";
    const beatpercentageCsql = "select beatpercentage(?,?)";
    const beatpercentageWsql = "select beatpercentage(?,?)";
    const ranksql = "call calculaterank(?)";
    const top3sql = "select username,total_points from users order by total_points desc limit 3";
    const totalpointssql = "select gettotalpoints(?)";
    const forensic = await querydatabase(sql, [username, "Forensics"]);
    const web = await querydatabase(sql, [username, "Web"]);
    const crypt = await querydatabase(sql, [username, "Cryptography"]);
    const beatpercentageC = await querydatabase(beatpercentageCsql,[username,'Cryptography']);
    const beatpercentageF = await querydatabase(beatpercentageFsql,[username,'Forensics']);
    const beatpercentageW = await querydatabase(beatpercentageWsql,[username,'Web']);
    const rank = await querydatabase(ranksql,[username]);
    const top3 = await querydatabase(top3sql,[]);
    const totalpoints = await querydatabase(totalpointssql,[username]);
    // console.log(beatpercentageF[0][`beatpercentage('${username}','Forensics')`]);
    const counting = [
      forensic[0][0].forensicscount,
      forensic[0][0].Problem_counts,
      web[0][0].webcount,
      web[0][0].Problem_counts,
      crypt[0][0].cryptographycount,
      crypt[0][0].Problem_counts,
    ];
    // console.log(totalcount[0]['totalcountofuser()']);
    // console.log(totalpoints[0][`gettotalpoints('${username}')`]);
    return res.json({
      Forensics: counting[0],
      Tforensics: counting[1],
      Web: counting[2],
      Tweb: counting[3],
      Crypt: counting[4],
      Tcrypt: counting[5],
      rank:rank[0][0].ranking,
      top1: top3[0].username,
      top2: top3[1].username,
      top3: top3[2].username,
      totalpoints:totalpoints[0][`gettotalpoints('${username}')`],
      beatpercentageF:beatpercentageF[0][`beatpercentage('${username}','Forensics')`],
      beatpercentageC:beatpercentageC[0][`beatpercentage('${username}','Cryptography')`],
      beatpercentageW:beatpercentageW[0][`beatpercentage('${username}','Web')`]
    });
  }
});

app.post("/register", (req, res) => {
  console.log(req.body.email, req.body.username, req.body.name);
  bcrypt.hash(req.body.pass.toString(), 10, (err, hash) => {
    if (err) return res.json({ Error: "Error for hashing the password" });
    const values = [req.body.email, req.body.username, req.body.name, hash, 0];
    const sql =
      "insert into users (email,username,name,password,total_points) values (?)";
    db.query(sql, [values], (err, result) => {
      if (err) {
        return res.json({ Error: "Unique" });
      }
      return res.json({ Status: "Success" });
    });
  });
});

app.get("/countenrolled", async(req,res)=>{
  const token = req.cookies.token
  
  const dec = await decode(token);
  let username = dec.username;
  const sql = await querydatabase('select * from courses');
  const enrollchecksql = 'select checkifenroll(?,?) as enrolledornot';
  const bash = await querydatabase(enrollchecksql,[username,sql[2]['course_name']]);
  const xss = await querydatabase(enrollchecksql,[username,sql[0]['course_name']]);
  const asm = await querydatabase(enrollchecksql,[username,sql[1]['course_name']]);
  const traffic = await querydatabase(enrollchecksql,[username,sql[4]['course_name']]);
  const lfi = await querydatabase(enrollchecksql,[username,sql[5]['course_name']]);
  const sqlinject = await querydatabase(enrollchecksql,[username,sql[6]['course_name']]);
  const map = await querydatabase(enrollchecksql,[username,sql[3]['course_name']]);
  // console.log(bash[0]['enrolledornot']);
  return res.json({
    bash:sql[2]['No_of_users_enrolled'],
    xss:sql[0]['No_of_users_enrolled'],
    asm:sql[1]['No_of_users_enrolled'],
    traffic:sql[4]['No_of_users_enrolled'],
    lfi:sql[5]['No_of_users_enrolled'],
    sqlinject:sql[6]['No_of_users_enrolled'],
    map:sql[3]['No_of_users_enrolled'],
    bashstatus:bash[0]['enrolledornot'],
    xssstatus:xss[0]['enrolledornot'],
    asmstatus:asm[0]['enrolledornot'],
    trafficstatus:traffic[0]['enrolledornot'],
    lfistatus:lfi[0]['enrolledornot'],
    sqlinjectstatus: sqlinject[0]['enrolledornot'],
    mapstatus:map[0]['enrolledornot']

  })

})

app.post("/enrolled",async(req,res)=>{
    const token = req.cookies.token;
    let username;
    if(!token){
      return res.json({ msg: "NOT AUTHORIZED" });
    }
    else{
      const dec = await decode(token);
      username = dec.username;
      const sql = "insert into enrolled values(?,?)";
      const checksql = "select username,course_name from enrolled where username=? and course_name=?";
      const coursename = req.body.coursename;
      const check = await querydatabase(checksql,[username,coursename]);
      if(check.length===0)
      {
        const course = await querydatabase(sql,[username,coursename]);
      }
      else{
        return res.json({course:"Already enrolled"})
      }
    }
    return res.status(200).json({course:"enrolled"});
})

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" }); 
});

app.listen(3001, () => {
  console.log("Server is running");
});
