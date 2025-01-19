-- Create the tables
create table category_type (
  id uuid primary key,
  name varchar(20) not null
);

create table financial_resource (
  id uuid primary key,
  name varchar(20) not null,
  mount decimal(10,2) not null
);

create table category(
  id uuid primary key,
  name varchar(20) not null,
  category_type_id uuid not null,
  CONSTRAINT FK_CATEGORY_CATEGORY_TYPE FOREIGN KEY (category_type_id)REFERENCES category_type(id)
)

create table income(
  id uuid primary key,
  description varchar(250) not null,
  date Date not null,
  mount decimal(10,2),
  category_id uuid not null,
  financial_resource_id uuid not null,
  CONSTRAINT FK_INCOME_CATEGORY FOREIGN KEY (category_id)REFERENCES category(id),
  CONSTRAINT FK_INCOME_FINANCIAL_RESOURCE FOREIGN KEY (financial_resource_id)REFERENCES financial_resource(id)
)

create table outcome(
  id uuid primary key,
  description varchar(250) not null,
  date Date not null,
  mount decimal(10,2),
  category_id uuid not null,
  financial_resource_id uuid not null,
  CONSTRAINT FK_OUTCOME_CATEGORY FOREIGN KEY (category_id)REFERENCES category(id),
  CONSTRAINT FK_OUTCOME_FINANCIAL_RESOURCE FOREIGN KEY (financial_resource_id)REFERENCES financial_resource(id)
)

create table budget(
  id uuid primary key,
  date Date not null,
  mount decimal(10,2),
  category_id uuid not null,
  CONSTRAINT FK_INCOME_CATEGORY FOREIGN KEY (category_id)REFERENCES category(id)
)


COMMENT ON TABLE category_type IS 'Table with types of categories';

COMMENT ON COLUMN category_type.name IS 'Name of category type';

COMMENT ON TABLE category IS 'Table with categories';

COMMENT ON COLUMN category.name IS 'Name of category';

COMMENT ON TABLE financial_resource IS 'Table with financial resources which are the methods wwhere the money comes in and out and are the financial reality and must have the balance of incomes and outcomes';

COMMENT ON COLUMN financial_resource.name IS 'Name of financial resource';
COMMENT ON COLUMN financial_resource.mount IS 'Mount of money before incomes and outcomes';

COMMENT ON TABLE income IS 'Table with outcomes';

COMMENT ON COLUMN income.description IS 'Description from where income came from';
COMMENT ON COLUMN income.date IS 'Date of the income';
COMMENT ON COLUMN income.mount IS 'Mount of money of the income';


COMMENT ON TABLE outcome IS 'Table with incomes';

COMMENT ON COLUMN outcome.description IS 'Description of outcome';
COMMENT ON COLUMN outcome.date IS 'Date of the outcome';
COMMENT ON COLUMN outcome.mount IS 'Mount of money of the outcome';

COMMENT ON TABLE budget IS 'Table with set budgets by dates';
COMMENT ON COLUMN budget.date IS 'Date from where the budget starts';
COMMENT ON COLUMN budget.mount IS 'Mount of set budget';