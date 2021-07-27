CREATE PROC usp_SearchForFiles(@fileExtension VARCHAR(5))
AS
    BEGIN
        SELECT Id, Name, CAST(Size AS VARCHAR) + 'KB' AS Size FROM Files
        WHERE Name LIKE '%' + @fileExtension
    END