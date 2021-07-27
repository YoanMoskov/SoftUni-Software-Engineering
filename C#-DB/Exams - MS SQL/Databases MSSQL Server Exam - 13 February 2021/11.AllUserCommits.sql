CREATE FUNCTION udf_AllUserCommits(@username VARCHAR(30))
RETURNS INT
AS
    BEGIN
        DECLARE @count INT
        SELECT @count = Count FROM
        (SELECT COUNT(C.Id) AS Count FROM Users U
        JOIN Commits C on U.Id = C.ContributorId
        WHERE Username = @username) RES
        RETURN @count
    END