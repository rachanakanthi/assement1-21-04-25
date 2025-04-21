create table students(
id serial primary key,
name varchar(20) not null,
email varchar(20) unique,
age int,
marks decimal(10,2)
);

insert into students(name,email,age,marks)values('rama','rama@gmail.com',11,78);
insert into students(name,email,age,marks)values('sita','sita@gmail.com',20,90);
insert into students(name,email,age,marks)values('priya','priya@gmail.com',51,78);
insert into students(name,email,age,marks)values('reka','reka@gmail.com',12,88);
insert into students(name,email,age,marks)values('tina','tina@gmail.com',23,67);
select * from students;

select * from students where age>21;

update  students set email='rahul@gmail.com' where id=5;
select * from students;

delete from students where age<18;
select * from students;

select * from students order by marks desc limit 1;


create table student(
id int primary key,
name varchar(20),
age int


);


insert into student values(1,'Rahul',22);
insert into student values(2,'Priya',21);
insert into student values(3,'Akash',23);

select * from student;

create table courses(
course_id int primary key,
student_id int,
course_name varchar(20),
foreign key(student_id)references students(id)
);
create table coursess(
course_id int primary key,
student_id int,
course_name varchar(20),
foreign key(student_id)references students(id)
);

insert into  coursess values(101,3,'java');
insert into  coursess values(102,2,'python');
insert into  coursess values(103,2,'sql');

select * from coursess;

select s.name ,c.course_name from students s,coursess c
where s.id=c.student_id;
