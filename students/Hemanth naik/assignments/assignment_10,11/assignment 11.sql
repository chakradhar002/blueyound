select * from employees;
 --1st question
select e.EMPLOYEE_ID || '  ' ||e.LAST_NAME as Employee,
   e.MANAGER_ID || '  ' ||e.LAST_NAME as Manager
   
   from employees e;
   
   
   --2nd question
   select e.FIRST_NAME || ' ' ||e.LAST_NAME as Name,
   e.HIRE_DATE from employees e
   where e.HIRE_DATE >(select e.HIRE_DATE from employees e where e.FIRST_NAME='Lex');
   
   
   --3rd question     employee ID, job title and number of days an employee worked,
   
   SELECT e.employee_id, e.job_id,
   EXTRACT(DAY FROM AGE(CURRENT_DATE, e.hire_date)) AS number_of_days
FROM employees e
WHERE e.department_id = 90;

   