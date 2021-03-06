CREATE TABLE Passports (
	Id INT PRIMARY KEY IDENTITY,
	PassportNumber NVARCHAR(50) NOT NULL
)

CREATE TABLE Persons (
	Id INT PRIMARY KEY IDENTITY,
	FirstName NVARCHAR(50) NOT NULL,
	Salary DECIMAL(15,2) NOT NULL,
	PassportID INT FOREIGN KEY (PassportID) REFERENCES Passports(Id) UNIQUE
)

SET IDENTITY_INSERT Passports ON

INSERT INTO Passports (Id, PassportNumber) VALUES
(101, 'N34FG21B'),
(102, 'K65LO4R7'),
(103, 'ZE657QP2')

INSERT INTO Persons (FirstName, Salary, PassportID) VALUES
('Roberto', 43300.00, 102),
('Tom', 56100.00, 103),
('Yana', 60200.00, 101)