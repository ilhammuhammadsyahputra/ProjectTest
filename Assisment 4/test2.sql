SELECT de.de_position AS POSITION, COUNT(*) AS total_employee, SUM(dge.dge_salary) AS total_salary
FROM data_employee AS de
LEFT JOIN data_grade_employee dge ON dge.dge_de_id = de.de_id
GROUP BY de.de_position