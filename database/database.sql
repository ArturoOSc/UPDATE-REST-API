CREATE DATABASE updatetask;

CREATE TABLE task(
    id INTEGER,
    Title VARCHAR(50),
    Dead_line DATE,
    Description VARCHAR(50),
    IsCompleted Boolean,
    Priority_Id INTEGER,
    UserId INTEGER
);

INSERT INTO task (id, Title, Dead_line, Description, IsCompleted, Priority_Id, UserId) VALUES
    (1, 'Lavar', '2022-05-07' ,'Lavar la ropa', FALSE, 1, 4),
    (2, 'Correr', '2022-05-23', 'Correr mucho', True, 2, 7); 