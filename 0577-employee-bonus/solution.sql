# Write your MySQL query statement below
SELECT name, Bonus.bonus FROM Employee  LEFT JOIN Bonus on Employee.empId = Bonus.empId where Bonus.bonus < 1000 OR Bonus.bonus IS null
