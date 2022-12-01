SELECT de.de_name AS NAME, de.de_position AS POSITION, dge.dge_salary AS salary
FROM data_employee AS de
LEFT JOIN data_grade_employee dge ON dge.dge_de_id = de.de_id
WHERE de.de_position = "staff" AND dge.dge_salary < 5000