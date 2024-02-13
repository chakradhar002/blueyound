

-- Insert sample data into the employees table
INSERT INTO employees (EMPLOYEE_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER, HIRE_DATE, JOB_ID, SALARY, COMMISSION_PCT, MANAGER_ID, DEPARTMENT_ID) VALUES

(104, 'Bruce', 'Ernst', 'BERNST', '590.423.4568', '1987-06-21', 'IT_PROG', 6000.00, 0.00, 103, 60),
(105, 'David', 'Austin', 'DAUSTIN', '590.423.4569', '1987-06-22', 'IT_PROG', 4800.00, 0.00, 103, 60),
(106, 'Valli', 'Pataballa', 'VPATABAL', '590.423.4560', '1987-06-23', 'IT_PROG', 4800.00, 0.00, 103, 60),
(107, 'Diana', 'Lorentz', 'DLORENTZ', '590.423.5567', '1987-06-24', 'IT_PROG', 4200.00, 0.00, 103, 60);


select * from employees;


SELECT e.FIRST_NAME || ' ' || e.LAST_NAME AS employee_name,
       e.JOB_ID,
       d.DEPARTMENT_NAME,
       d.DEPARTMENT_ID,
	  l.LOCATION_ID,
	  l.CITY
FROM employees e
JOIN departments d ON e.DEPARTMENT_ID = d.DEPARTMENT_ID
JOIN locations l ON d.LOCATION_ID = l.LOCATION_ID
WHERE e.FIRST_NAME='David';



select e.EMPLOYEE_ID || '  ' ||e.LAST_NAME as Employee,
   e.MANAGER_ID || '  ' ||e.LAST_NAME as Manager
   
   from employees e;
   



