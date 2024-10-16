USE [Student_Management]
GO
INSERT [dbo].[Users] ([UserID], [Username], [Password]) VALUES (1, N'B2203551', N'123456')
INSERT [dbo].[Users] ([UserID], [Username], [Password]) VALUES (2, N'B2203557', N'123456')
INSERT [dbo].[Users] ([UserID], [Username], [Password]) VALUES (3, N'B2203561', N'123456')
INSERT [dbo].[Users] ([UserID], [Username], [Password]) VALUES (4, N'B2203565', N'123456')
GO
INSERT [dbo].[Students] ([UserID], [StudentID], [Name], [Age], [Email], [Address], [PhoneNumber], [CourseYear]) VALUES (1, N'B2203551', N'Trần Hải Đăng', 20, N'dangb2203551@student.ctu.edu.vn', N'Hau Giang', N'0123456789', N'K48')
INSERT [dbo].[Students] ([UserID], [StudentID], [Name], [Age], [Email], [Address], [PhoneNumber], [CourseYear]) VALUES (2, N'B2203557', N'Phạm Hữu Hưng', 20, N'hungB2203551@student.ctu.edu.vn', N'Cần Thơ', N'0999999999', N'K48')
INSERT [dbo].[Students] ([UserID], [StudentID], [Name], [Age], [Email], [Address], [PhoneNumber], [CourseYear]) VALUES (3, N'B2203561', N'Tiêu Lê Gia Linh', 20, N'linhB2203561@student.ctu.edu.vn', N'Trà Vinh', N'0987654321', N'K48')
INSERT [dbo].[Students] ([UserID], [StudentID], [Name], [Age], [Email], [Address], [PhoneNumber], [CourseYear]) VALUES (4, N'B2203565', N'Trương Minh Mẫn', 20, N'manB2203565@student.ctu.edu.vn', N'Đầm Dơi, Cà Mau', N'0912404113', N'K48')
GO
INSERT [dbo].[Courses] ([CourseID], [CourseName], [Credits], [Room]) VALUES (N'CT101H', N'Toán rời rạc', 4, N'613/ATL')
INSERT [dbo].[Courses] ([CourseID], [CourseName], [Credits], [Room]) VALUES (N'CT112H', N'Phân tích và thiết kế hệ thống', 3, N'212/DI')
INSERT [dbo].[Courses] ([CourseID], [CourseName], [Credits], [Room]) VALUES (N'CT218H', N'Lập trình Java app', 3, N'212/DI')
INSERT [dbo].[Courses] ([CourseID], [CourseName], [Credits], [Room]) VALUES (N'CT219H', N'Lập trình .NET', 3, N'213/DI')
INSERT [dbo].[Courses] ([CourseID], [CourseName], [Credits], [Room]) VALUES (N'CT220H', N'Lập trình đa nền tảng', 3, N'213/DI')
GO
SET IDENTITY_INSERT [dbo].[Schedules] ON 

INSERT [dbo].[Schedules] ([ScheduleID], [StudentID], [CourseID], [DayOfWeek], [StartTime], [EndTime]) VALUES (1, N'B2203551', N'CT220H', N'Wed', CAST(N'13:30:00' AS Time), CAST(N'16:10:00' AS Time))
INSERT [dbo].[Schedules] ([ScheduleID], [StudentID], [CourseID], [DayOfWeek], [StartTime], [EndTime]) VALUES (2, N'B2203551', N'CT101H', N'Mon', CAST(N'08:00:00' AS Time), CAST(N'10:00:00' AS Time))
INSERT [dbo].[Schedules] ([ScheduleID], [StudentID], [CourseID], [DayOfWeek], [StartTime], [EndTime]) VALUES (1004, N'B2203551', N'CT219H', N'Thu', CAST(N'07:00:00' AS Time), CAST(N'10:20:00' AS Time))
INSERT [dbo].[Schedules] ([ScheduleID], [StudentID], [CourseID], [DayOfWeek], [StartTime], [EndTime]) VALUES (1005, N'B2203551', N'CT218H', N'Fri', CAST(N'13:30:00' AS Time), CAST(N'16:10:00' AS Time))
INSERT [dbo].[Schedules] ([ScheduleID], [StudentID], [CourseID], [DayOfWeek], [StartTime], [EndTime]) VALUES (1006, N'B2203551', N'CT101H', N'Tue', CAST(N'13:30:00' AS Time), CAST(N'16:10:00' AS Time))
SET IDENTITY_INSERT [dbo].[Schedules] OFF
GO
SET IDENTITY_INSERT [dbo].[Grades] ON 

INSERT [dbo].[Grades] ([GradeID], [StudentID], [Course], [Grade], [DateAssigned]) VALUES (1, N'B2203551', N'Lập trình đa nền tảng', N'A ', CAST(N'2024-09-10' AS Date))
INSERT [dbo].[Grades] ([GradeID], [StudentID], [Course], [Grade], [DateAssigned]) VALUES (2, N'B2203551', N'Toán', N'A ', CAST(N'2024-10-09' AS Date))
SET IDENTITY_INSERT [dbo].[Grades] OFF
GO
INSERT [dbo].[SideInformation] ([StudentID], [imgUrl]) VALUES (N'B2203551', N'../../assets/images/avatars/dang.jpg')
INSERT [dbo].[SideInformation] ([StudentID], [imgUrl]) VALUES (N'B2203557', N'')
INSERT [dbo].[SideInformation] ([StudentID], [imgUrl]) VALUES (N'B2203561', NULL)
INSERT [dbo].[SideInformation] ([StudentID], [imgUrl]) VALUES (N'B2203565', NULL)
GO
