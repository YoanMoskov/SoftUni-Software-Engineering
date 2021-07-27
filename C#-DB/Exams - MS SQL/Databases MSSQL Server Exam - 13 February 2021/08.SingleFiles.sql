SELECT F.Id, F.Name, CAST(F.Size AS VARCHAR) + 'KB' AS Size FROM Files F
LEFT JOIN Files F2 on F.Id = F2.ParentId
WHERE F2.Id IS NULL
ORDER BY F.Id, F.Name, F.Size DESC