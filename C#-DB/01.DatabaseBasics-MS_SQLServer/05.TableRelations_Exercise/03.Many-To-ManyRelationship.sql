CREATE TABLE Students (
	StudentID INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(50) NOT NULL
)

CREATE TABLE Exams (
	ExamID INT PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(50) NOT NULL
)

CREATE TABLE StudentsExams (
	StudentID INT NOT NULL FOREIGN KEY (StudentID) REFERENCES Students(StudentID), 
	ExamID INT  NOT NULL FOREIGN KEY (ExamID) REFERENCES Exams(ExamID)
)

ALTER TABLE StudentsExams 
ADD PRIMARY KEY(StudentID,ExamID)