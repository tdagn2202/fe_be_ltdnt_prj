USE [master]
GO
/****** Object:  Database [Student_Management]    Script Date: 10/13/2024 9:54:59 PM ******/
CREATE DATABASE [Student_Management]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Student_Management', FILENAME = N'D:\SQL2022\MSSQL16.MSSQLSERVER\MSSQL\DATA\Student_Management.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Student_Management_log', FILENAME = N'D:\SQL2022\MSSQL16.MSSQLSERVER\MSSQL\DATA\Student_Management_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [Student_Management] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Student_Management].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Student_Management] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Student_Management] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Student_Management] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Student_Management] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Student_Management] SET ARITHABORT OFF 
GO
ALTER DATABASE [Student_Management] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Student_Management] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Student_Management] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Student_Management] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Student_Management] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Student_Management] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Student_Management] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Student_Management] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Student_Management] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Student_Management] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Student_Management] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Student_Management] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Student_Management] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Student_Management] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Student_Management] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Student_Management] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Student_Management] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Student_Management] SET RECOVERY FULL 
GO
ALTER DATABASE [Student_Management] SET  MULTI_USER 
GO
ALTER DATABASE [Student_Management] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Student_Management] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Student_Management] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Student_Management] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Student_Management] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Student_Management] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Student_Management', N'ON'
GO
ALTER DATABASE [Student_Management] SET QUERY_STORE = ON
GO
ALTER DATABASE [Student_Management] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [Student_Management]
GO
/****** Object:  Table [dbo].[Courses]    Script Date: 10/13/2024 9:55:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Courses](
	[CourseID] [varchar](20) NOT NULL,
	[CourseName] [nvarchar](100) NOT NULL,
	[Credits] [int] NULL,
	[Room] [varchar](50) NULL,
 CONSTRAINT [PK__Courses__C92D718734C77C87] PRIMARY KEY CLUSTERED 
(
	[CourseID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Grades]    Script Date: 10/13/2024 9:55:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Grades](
	[GradeID] [int] IDENTITY(1,1) NOT NULL,
	[StudentID] [varchar](20) NOT NULL,
	[Course] [nvarchar](100) NOT NULL,
	[Grade] [char](2) NULL,
	[DateAssigned] [date] NULL,
 CONSTRAINT [PK__Grades__54F87A37492FDC22] PRIMARY KEY CLUSTERED 
(
	[GradeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Schedules]    Script Date: 10/13/2024 9:55:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Schedules](
	[ScheduleID] [int] IDENTITY(1,1) NOT NULL,
	[StudentID] [varchar](20) NOT NULL,
	[CourseID] [varchar](20) NOT NULL,
	[DayOfWeek] [nvarchar](10) NULL,
	[StartTime] [time](7) NULL,
	[EndTime] [time](7) NULL,
 CONSTRAINT [PK__Schedule__9C8A5B698C28A227] PRIMARY KEY CLUSTERED 
(
	[ScheduleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SideInformation]    Script Date: 10/13/2024 9:55:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SideInformation](
	[StudentID] [varchar](20) NULL,
	[imgUrl] [varchar](500) NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Students]    Script Date: 10/13/2024 9:55:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Students](
	[UserID] [int] NOT NULL,
	[StudentID] [varchar](20) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Age] [int] NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Address] [nvarchar](255) NULL,
	[PhoneNumber] [nvarchar](15) NULL,
	[CourseYear] [varchar](50) NULL,
 CONSTRAINT [PK__Students__32C52A79493BA648] PRIMARY KEY CLUSTERED 
(
	[StudentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UQ__Students__A9D105346BBB4427] UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 10/13/2024 9:55:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserID] [int] NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK__Users__1788CCAC5E71899B] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UQ__Users__536C85E49958BD5F] UNIQUE NONCLUSTERED 
(
	[Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Grades]  WITH CHECK ADD  CONSTRAINT [FK__Grades__StudentI__3E52440B] FOREIGN KEY([StudentID])
REFERENCES [dbo].[Students] ([StudentID])
GO
ALTER TABLE [dbo].[Grades] CHECK CONSTRAINT [FK__Grades__StudentI__3E52440B]
GO
ALTER TABLE [dbo].[Schedules]  WITH CHECK ADD  CONSTRAINT [FK_Schedules_Courses] FOREIGN KEY([CourseID])
REFERENCES [dbo].[Courses] ([CourseID])
GO
ALTER TABLE [dbo].[Schedules] CHECK CONSTRAINT [FK_Schedules_Courses]
GO
ALTER TABLE [dbo].[Schedules]  WITH CHECK ADD  CONSTRAINT [FK_Schedules_Students] FOREIGN KEY([StudentID])
REFERENCES [dbo].[Students] ([StudentID])
GO
ALTER TABLE [dbo].[Schedules] CHECK CONSTRAINT [FK_Schedules_Students]
GO
ALTER TABLE [dbo].[SideInformation]  WITH CHECK ADD FOREIGN KEY([StudentID])
REFERENCES [dbo].[Students] ([StudentID])
GO
ALTER TABLE [dbo].[Students]  WITH CHECK ADD  CONSTRAINT [FK__Students__UserID__3B75D760] FOREIGN KEY([UserID])
REFERENCES [dbo].[Users] ([UserID])
GO
ALTER TABLE [dbo].[Students] CHECK CONSTRAINT [FK__Students__UserID__3B75D760]
GO
/****** Object:  StoredProcedure [dbo].[getStudentInformation]    Script Date: 10/13/2024 9:55:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[getStudentInformation]
    @Username NVARCHAR(50)
AS
BEGIN
    SELECT s.Name, s.CourseYear, s.StudentID, s.Email, s.Address, s.PhoneNumber, si.imgUrl
	FROM Users u
	JOIN Students s ON u.UserID = s.UserID
	JOIN SideInformation si ON s.StudentID = si.StudentID
	WHERE u.Username = @Username;

END;
GO
/****** Object:  StoredProcedure [dbo].[getStudentSchedule]    Script Date: 10/13/2024 9:55:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[getStudentSchedule]
    @Username NVARCHAR(50)
AS
BEGIN
    SELECT 
        c.CourseID, 
        c.CourseName, 
        c.Room,  
        s.DayOfWeek, 
        CONVERT(VARCHAR(5), s.StartTime, 108) AS StartTime, 
        CONVERT(VARCHAR(5), s.EndTime, 108) AS EndTime
    FROM 
        Users u
    JOIN 
        Students st ON u.UserID = st.UserID
    JOIN 
        Schedules s ON st.StudentID = s.StudentID
    JOIN 
        Courses c ON s.CourseID = c.CourseID
    WHERE 
        u.Username = @Username
    ORDER BY 
        CASE s.DayOfWeek
            WHEN 'Mon' THEN 1
            WHEN 'Tue' THEN 2
            WHEN 'Wed' THEN 3
            WHEN 'Thu' THEN 4
            WHEN 'Fri' THEN 5
            WHEN 'Sat' THEN 6
            WHEN 'Sun' THEN 7
        END;
END;
GO
USE [master]
GO
ALTER DATABASE [Student_Management] SET  READ_WRITE 
GO
