-- Create the tables
create table category_type (
  id uuid primary key,
  name varchar(20) not null,
  description text not null
);

create table transaction_type(
  id uuid primary key,
  name varchar(20) not null,
  description text not null
);

create table financial_resource (
  id uuid primary key,
  name varchar(20) not null,
  mount decimal(10,2) not null
);

create table category(
  id uuid primary key,
  name varchar(20) not null,
  description text not null,
  category_type_id uuid not null,
  CONSTRAINT FK_CATEGORY_CATEGORY_TYPE FOREIGN KEY (category_type_id)REFERENCES category_type(id)
);

create table transaction(
  id uuid primary key,
  description varchar(250) not null,
  date Date not null,
  mount decimal(10,2) not null, 
  category_id uuid not null,
  financial_resource_id uuid not null,
  transaction_type_id uuid not null,
  CONSTRAINT FK_TRANSACTION_CATEGORY FOREIGN KEY (category_id)REFERENCES category(id),
  CONSTRAINT FK_TRANSACTION_FINANCIAL_RESOURCE FOREIGN KEY (financial_resource_id)REFERENCES financial_resource(id),
  CONSTRAINT FK_TRANSACTION_TRANSACTION_TYPE FOREIGN KEY (transaction_type_id)REFERENCES transaction_type(id)
);

create table budget(
  id uuid primary key,
  date Date not null,
  mount decimal(10,2),
  category_id uuid not null,
  CONSTRAINT FK_INCOME_CATEGORY FOREIGN KEY (category_id)REFERENCES category(id)
);


COMMENT ON TABLE category_type IS 'Table with types of categories';

COMMENT ON COLUMN category_type.name IS 'Name of category type';
COMMENT ON COLUMN category_type.description IS 'Description of category type';

COMMENT ON TABLE transaction_type IS 'Table with types of transactions';

COMMENT ON COLUMN transaction_type.name IS 'Name of transaction type';
COMMENT ON COLUMN transaction_type.description IS 'Description of transaction type';

COMMENT ON TABLE category IS 'Table with categories';

COMMENT ON COLUMN category.name IS 'Name of category';

COMMENT ON TABLE financial_resource IS 'Table with financial resources which are the methods wwhere the money comes in and out and are the financial reality and must have the balance of incomes and outcomes';

COMMENT ON COLUMN financial_resource.name IS 'Name of financial resource';
COMMENT ON COLUMN financial_resource.mount IS 'Mount of money before incomes and outcomes';

COMMENT ON TABLE transaction IS 'Table with outcomes and incomes defined by transaction_type';

COMMENT ON COLUMN transaction.description IS 'Description from where income or outcome came from';
COMMENT ON COLUMN transaction.date IS 'Date of the income or outcome';
COMMENT ON COLUMN transaction.mount IS 'Mount of money of the income or outcome';

COMMENT ON TABLE budget IS 'Table with set budgets by dates';
COMMENT ON COLUMN budget.date IS 'Date from where the budget starts';
COMMENT ON COLUMN budget.mount IS 'Mount of set budget';