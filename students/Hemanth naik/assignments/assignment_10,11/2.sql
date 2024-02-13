-- Create the employees table
CREATE TABLE employees (
    EMPLOYEE_ID     INTEGER PRIMARY KEY,
    FIRST_NAME      VARCHAR(50),
    LAST_NAME       VARCHAR(50),
    EMAIL           VARCHAR(100),
    PHONE_NUMBER    VARCHAR(20),
    HIRE_DATE       DATE,
    JOB_ID          VARCHAR(10),
    SALARY          DECIMAL(10, 2),
    COMMISSION_PCT  DECIMAL(4, 2),
    MANAGER_ID      INTEGER,
    DEPARTMENT_ID   INTEGER
  
);

-- Insert sample data into the employees table
INSERT INTO employees (EMPLOYEE_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE_NUMBER, HIRE_DATE, JOB_ID, SALARY, COMMISSION_PCT, MANAGER_ID, DEPARTMENT_ID) VALUES
(100, 'Steven', 'King', 'SKING', '515.123.4567', '1987-06-17', 'AD_PRES', 24000.00, 0.00, 0, 90),
(101, 'Neena', 'Kochhar', 'NKOCHHAR', '515.123.4568', '1987-06-18', 'AD_VP', 17000.00, 0.00, 100, 90),
(102, 'Lex', 'De Haan', 'LDEHAAN', '515.123.4569', '1987-06-19', 'AD_VP', 17000.00, 0.00, 100, 90),
(103, 'Alexander', 'Hunold', 'AHUNOLD', '590.423.4567', '1987-06-20', 'IT_PROG', 9000.00, 0.00, 102, 60);

-- Create the departments table
CREATE TABLE departments (
    DEPARTMENT_ID       INTEGER PRIMARY KEY,
    DEPARTMENT_NAME     VARCHAR(50),
    MANAGER_ID          INTEGER,
    LOCATION_ID         INTEGER
    
);

-- Insert sample data into the departments table
INSERT INTO departments (DEPARTMENT_ID, DEPARTMENT_NAME, MANAGER_ID, LOCATION_ID) VALUES
(10, 'Administration', 200, 1700),
(20, 'Marketing', 201, 1800),
(30, 'Purchasing', 114, 1700),
(40, 'Human Resources', 203, 2400),
(50, 'Shipping', 121, 1500),
(60, 'IT', 103, 1400),
(70, 'Public Relations', 204, 2700),
(80, 'Sales', 145, 2500);





select FIRST_NAME,LAST_NAME,employees.DEPARTMENT_ID,departments.DEPARTMENT_NAME FROM employees left join  departments  on employees.DEPARTMENT_ID=departments.DEPARTMENT_ID;