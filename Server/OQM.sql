--
-- File generated with SQLiteStudio v3.3.3 on Per Eki 14 14:51:54 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Client
CREATE TABLE Client (
    clientId  VARCHAR      PRIMARY KEY
                           UNIQUE
                           NOT NULL,
    officeId  VARCHAR (40) REFERENCES Office (officeId),
    serviceId              REFERENCES Service (serviceId) 
);

INSERT INTO Client (
                       clientId,
                       officeId,
                       serviceId
                   )
                   VALUES (
                       'C1',
                       'Office1',
                       1
                   );

INSERT INTO Client (
                       clientId,
                       officeId,
                       serviceId
                   )
                   VALUES (
                       'C2',
                       'Office1',
                       2
                   );


-- Table: Counter
CREATE TABLE Counter (
    counterId VARCHAR (40) PRIMARY KEY
                           NOT NULL
                           UNIQUE,
    serviceId VARCHAR (40) REFERENCES Service (serviceId),
    officerId VARCHAR (40) REFERENCES Officer (officerId),
    officeId  VARCHAR (40) REFERENCES Office (officeId),
    clientId  VARCHAR (40) REFERENCES Client (clientId) 
);

INSERT INTO Counter (
                        counterId,
                        serviceId,
                        officerId,
                        officeId,
                        clientId
                    )
                    VALUES (
                        'counter1',
                        '1',
                        'O1',
                        'Office1',
                        NULL
                    );


-- Table: Manager
CREATE TABLE Manager (
    managerId VARCHAR (40) PRIMARY KEY
                           UNIQUE
                           NOT NULL,
    mName     VARCHAR (60) NOT NULL,
    mSurname  VARCHAR (60) NOT NULL,
    officeNo  VARCHAR (25) REFERENCES Office (officeId) 
);

INSERT INTO Manager (
                        managerId,
                        mName,
                        mSurname,
                        officeNo
                    )
                    VALUES (
                        'M1',
                        'Marco',
                        'Torchiano',
                        'Office1'
                    );


-- Table: Office
CREATE TABLE Office (
    officeId  VARCHAR (40) PRIMARY KEY
                           NOT NULL,
    counterId VARCHAR (40) REFERENCES Counter (counterId) 
);

INSERT INTO Office (
                       officeId,
                       counterId
                   )
                   VALUES (
                       'Office1',
                       'counter1'
                   );


-- Table: Officer
CREATE TABLE Officer (
    officerId      VARCHAR (40) PRIMARY KEY
                                UNIQUE
                                NOT NULL,
    officerName    VARCHAR (60) NOT NULL,
    officerSurname VARCHAR (60) NOT NULL,
    officeId       VARCHAR (40) REFERENCES Office (officeId) 
);

INSERT INTO Officer (
                        officerId,
                        officerName,
                        officerSurname,
                        officeId
                    )
                    VALUES (
                        'O1',
                        'Sponge',
                        'Bob',
                        'Office1'
                    );


-- Table: Service
CREATE TABLE Service (
    serviceId   INTEGER       PRIMARY KEY ASC AUTOINCREMENT
                              NOT NULL
                              UNIQUE,
    serviceType VARCHAR (300) NOT NULL,
    date        DATE          NOT NULL,
    officeId    VARCHAR (40)  REFERENCES Office (officeId),
    counterId   VARCHAR (40)  REFERENCES Counter (counterId) 
);

INSERT INTO Service (
                        serviceId,
                        serviceType,
                        date,
                        officeId,
                        counterId
                    )
                    VALUES (
                        1,
                        'bill',
                        '2019-10-15',
                        'Office1',
                        'counter1'
                    );

INSERT INTO Service (
                        serviceId,
                        serviceType,
                        date,
                        officeId,
                        counterId
                    )
                    VALUES (
                        2,
                        'post',
                        '2021-10-15',
                        'Office1',
                        'counter1'
                    );


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
