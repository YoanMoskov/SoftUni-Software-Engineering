SELECT TOP(5) R.Id, R.Name, COUNT(C.Id) AS Commits FROM RepositoriesContributors RC
FULL JOIN Repositories R on R.Id = RC.RepositoryId
FULL JOIN Commits C on R.Id = C.RepositoryId
GROUP BY R.Id, R.Name
ORDER BY Commits DESC, R.Id, R.Name