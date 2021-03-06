SELECT U.Username, AVG(F.Size) AS Size FROM Users U
JOIN Commits C on U.Id = C.ContributorId
JOIN Files F on C.Id = F.CommitId
GROUP BY U.Username
ORDER BY Size DESC, U.Username