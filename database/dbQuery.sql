CREATE DATABASE Student_Management
GO
GO
USE Student_Management

CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(50) NOT NULL UNIQUE,
    Password NVARCHAR(255) NOT NULL
);

CREATE TABLE Students (
    UserID INT NOT NULL IDENTITY(1,1) FOREIGN KEY REFERENCES Users(UserID),
    StudentID INT PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Age INT NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    Address NVARCHAR(255),
    PhoneNumber NVARCHAR(15)
);

CREATE TABLE Grades (
    GradeID INT PRIMARY KEY IDENTITY(1,1),
    StudentID INT NOT NULL FOREIGN KEY REFERENCES Students(StudentID),
    Course NVARCHAR(100) NOT NULL,
    Grade CHAR(2), -- Example: 'A', 'B+', etc.
    DateAssigned DATE
);


CREATE TABLE Schedules (
    ScheduleID INT PRIMARY KEY IDENTITY(1,1),
    StudentID INT NOT NULL FOREIGN KEY REFERENCES Students(StudentID),
    Course NVARCHAR(100) NOT NULL,
    DayOfWeek NVARCHAR(10), -- Example: 'Monday', 'Tuesday'
    StartTime TIME,
    EndTime TIME
);

CREATE TABLE Courses (
    CourseID INT PRIMARY KEY IDENTITY(1,1),
    CourseName NVARCHAR(100) NOT NULL,
    Credits INT
);

INSERT INTO Users (Username, Password) values ('sa', 'sa') 
INSERT INTO Students 
(
    StudentID, Name, Age, Email, Address, PhoneNumber
)
VALUES 
(
    'B2203551', 'Tran Hai Dang', 20, 'dangB2203551@student.ctu.edu.vn', 'Hau Giang', 0123456789
) 

INSERT INTO Schedules 
(
    StudentID, Course, DayOfWeek, StartTime, EndTime
)
VALUES
(
    'B2203551', 'React Native', 'Wednesday', '13:30', '16:10'
) 

INSERT INTO Grades 
(
    StudentID, Course, Grade, DateAssigned
)
VALUES 
(
    'B2203551', 'React Native', 'A', GETDATE()
)

INSERT INTO Courses (CourseName, Credits) values ('React Native', 3) 

SELECT * FROM Students
