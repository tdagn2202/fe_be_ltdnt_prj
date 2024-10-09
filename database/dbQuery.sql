CREATE DATABASE Student_Management
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
