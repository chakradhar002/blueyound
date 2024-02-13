-- Create the countries table
CREATE TABLE countries (
   country_id    varchar(2)   PRIMARY KEY,
   country_name  varchar(50),
   region_id     int
);

-- Insert sample data into the countries table
INSERT INTO countries (country_id, country_name, region_id) VALUES
('AR',         ' Argentina',     2),
('AU '         ,'Australia'     ,3),
('BE',          'Belgium'       ,1),
('BR',          'Brazil '       ,2),
('CA ' ,        'Canada '       ,2),
('CH'   ,      ' Switzerland'   ,1),
('CN'    ,      'China '        ,3),
('DE'     ,    ' Germany '      ,1),
('DK'      ,    'Denmark '     , 1),
('EG '      ,   'Egypt '      ,  4);

INSERT INTO countries (country_id, country_name, region_id) VALUES
('JP','Japan',3),
('IT','Italy',2),
('US','America',1);

select * from countries;


-- Create the locations table
CREATE TABLE locations (
   location_id      int          PRIMARY KEY,
   street_address   varchar(100),
   postal_code      varchar(20),
   city             varchar(50),
   state_province   varchar(50),
   country_id       varchar(2),
   FOREIGN KEY (country_id) REFERENCES countries(country_id)
);

-- Insert sample data into the locations table
INSERT INTO locations (location_id, street_address, postal_code, city, state_province, country_id) VALUES
(1000, '1297 Via Cola di Rie', '989', 'Roma', NULL, 'IT'),
(1100, '93091 Calle della Te', '10934', 'Venice', NULL, 'IT'),
(1200, '2017 Shinjuku-ku', '1689', 'Tokyo', 'Tokyo Prefectu', 'JP'),
(1300, '9450 Kamiya-cho', '6823', 'Hiroshima', NULL, 'JP'),
(1400, '2014 Jabberwocky Rd', '26192', 'Southlake', 'Texas', 'US'),
(1500, '2011 Interiors Blvd', '99236', 'South San', 'California', 'US');


select* from locations;

select location_id,street_address,city,state_province from locations full join 
countries on countries.country_id=locations.country_id;









