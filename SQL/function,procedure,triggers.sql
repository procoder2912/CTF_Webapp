## Procedure
DELIMITER //
create procedure counttotalproblemssolved(in user varchar(200), in wcategory varchar(100))
begin
	IF wcategory = 'Forensics' THEN
        select forensicscount, Problem_counts from users,category where username=user and category_name='Forensics';
    ELSEIF wcategory = 'Web' THEN
        select webcount, Problem_counts from users,category where username=user and category_name='Web';
    ELSE
        select cryptographycount, Problem_counts from users,category where username=user and category_name='Cryptography';
    END IF;
end   //
DELIMITER //

## Function
DELIMITER //
create function beatpercentage(user varchar(200),wcategory varchar(50))
returns double
deterministic
begin
declare count double;
declare totalcount double;

	if wcategory='Forensics' then
		select count(*) into count from users where forensicscount < (select forensicscount from users where username=user);
	elseif wcategory='Web' then
		select count(*) into count from users where webcount < (select webcount from users where username=user);
	elseif wcategory='Cryptography' then 
		select count(*) into count from users where cryptographycount < (select cryptographycount from users where username=user);
	end if;

select count(*) into totalcount from  users;

return count/totalcount*100;

end //
DELIMITER //

DELIMITER //
create function gettotalpoints(user varchar(200))
returns int
deterministic
begin
declare points int;
select total_points into points from users where username=user;

return points;
end//

DELIMITER //

## Cursor
DELIMITER //
create procedure calculaterank(in vusername varchar(200))
begin
declare done int default 0;
declare user varchar(200);
declare points int;
declare ranking int;
declare cur1 cursor for select username,total_points from users order by total_points desc;
declare continue handler for not found set done = 1;

set ranking = 1;
open cur1;
fetch cur1 into user,points;
while not done and user !=vusername do 
	set ranking = ranking +1;
    fetch cur1 into user,points;
end while;
close cur1;
select ranking;
end //

DELIMITER //

## Trigger
DELIMITER //
create trigger countenrolledusers
after insert on enrolled
for each row
begin
update courses set No_of_users_enrolled=No_of_users_enrolled+1 where course_name = new.course_name;
end //
DELIMITER //

DELIMITER //
create trigger problemcountofcategory after insert 
on problem
for each row
begin
if new.category_name='Forensics' then
update category set Problem_counts=Problem_counts+1 where category_name='Forensics';
elseif new.category_name='Web' then
update category set Problem_counts=Problem_counts+1 where category_name='Web';
else 
update category set Problem_counts=Problem_counts+1 where category_name='Cryptography';
end if;
end //
DELIMITER //




#######
DELIMITER //
create procedure pointupdate(in point int,vusername varchar(200),category varchar(50))
begin
    IF category = 'Forensics' THEN
        UPDATE users SET total_points = total_points + point, forensicscount = forensicscount + 1 WHERE username = vusername;
    ELSEIF category = 'Web' THEN
        UPDATE users SET total_points = total_points + point, webcount = webcount + 1 WHERE username = vusername;
    ELSE
        UPDATE users SET total_points = total_points + point, cryptographycount = cryptographycount + 1 WHERE username = vusername;
    END IF;

end;//
DELIMITER //

DELIMITER //
create procedure countbeatsF(in vuser varchar(200))
begin
declare done int default 0;
declare count int;
declare user varchar(50);
declare cur1 cursor for select username from users where forensicscount < (select forensicscount from users where username=vuser);
declare continue handler for not found set done = 1;

set count = 0;
open cur1;
repeat 
fetch cur1 into user;
	if not done then 
    set count = count + 1;
    end if;
    until done 
    end repeat;
close cur1;
select count ;	
 
end //
DELIMITER //

DELIMITER //
create procedure countbeatsW(in vuser varchar(200))
begin
declare done int default 0;
declare count int;
declare user varchar(50);
declare cur1 cursor for select username from users where webcount < (select webcount from users where username=vuser);
declare continue handler for not found set done = 1;

set count = 0;
open cur1;
repeat 
fetch cur1 into user;
	if not done then 
    set count = count + 1;
    end if;
    until done 
    end repeat;
close cur1;
select count ;	
 
end //
DELIMITER //


DELIMITER //
create procedure countbeatsC(in vuser varchar(200))
begin
declare done int default 0;
declare count int;
declare user varchar(50);
declare cur1 cursor for select username from users where cryptographycount < (select cryptographycount from users where username=vuser);
declare continue handler for not found set done = 1;

set count = 0;
open cur1;
repeat 
fetch cur1 into user;
	if not done then 
    set count = count + 1;
    end if;
    until done 
    end repeat;
close cur1;
select count ;	
 
end //
DELIMITER //

DELIMITER //
create function totalcountofuser()
returns int
deterministic
begin
declare count int;

select count(*) into count from users;

return count;
end //
DELIMITER //



	
DELIMITER //
create function gettotalpoints(user varchar(200))
returns int
deterministic
begin
declare points int;
select total_points into points from users where username=user;

return points;
end//

DELIMITER //

DELIMITER //
create trigger countenrolledusers
after insert on enrolled
for each row
begin
update courses set No_of_users_enrolled=No_of_users_enrolled+1 where course_name = new.course_name;
end //
DELIMITER //

DELIMITER //
create function noofuserenrolled(course varchar(50))
returns int
deterministic
begin
declare count int;
select No_of_users_enrolled into count from courses where course_name=course;

return count;
end //
DELIMITER //

DELIMITER //
create function checkifenroll(user varchar(50),course varchar(50))
returns bool
deterministic
begin
declare count int;
declare enroll bool;
select count(*) into count from enrolled where username=user and course_name=course;
if count=0 then
	set enroll = false;
else
	set enroll = true;
end if;

return enroll;
end //
DELIMITER //



######

use ctfwebapp;
//
show tables;
//
select * from problem;






