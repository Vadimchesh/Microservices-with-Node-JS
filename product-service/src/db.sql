CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table products (
	id uuid primary key default uuid_generate_v4(),
	title text not null,
   description text,
   price int,
   image text
)

create table stocks (
	product_id uuid,
   count integer,
   foreign key ("product_id") references "products" ("id")
)

insert into products (title, description, price, image) values
	('Very Cherry Mickey Sock', 'The Very Cherry Mickey sock says what were all thinking: a design so sweet we could eat it. After some thorough testing, we can confidently say that you should put these yummy socks on your feet, not in your mouth. Pair up: also available in sizes for kids.', 7, 'https://media.happysocks.com/catalog/product/m/a/magentoimage_aestptedy6pigv6b.png'),
	('Keep It Together Sock', 'The missing piece on days when the world feels like a giant puzzle: the Keep It Together sock. The 80s inspired special edition design turns your favourite Disney characters signature details into a colour-popping pattern.', 10, 'https://media.happysocks.com/catalog/product/m/a/magentoimage_pposya96b5wnj3kb.png'),
	('Cloudy Sock', 'Do some cloud watching without going out. The skys the limit.', 10, 'https://media.happysocks.com/catalog/product/m/a/magentoimage_g725loowqs0jkt3u.png'),
	('Banana Sock', 'Who can say no to a pair of Banana socks? The half moon-like curves in yellow and blue can be enjoyed as it is, or maybe you combine it with another design for a fruit salad style.', 11, 'https://media.happysocks.com/catalog/product/m/a/magentoimage_oz8bxg3ve9f4pmar.png')

insert into stocks(product_id, count) values
    ('9672ad3a-30e2-4a34-92b5-65e7936c860e', '10'),
    ('9d203608-c156-4a2a-8b97-327e273c9221', '1'),
    ('ea2e8c00-2a40-4aa9-af24-202a3aed5040', '22'),
    ('f3851819-59da-4eb8-b2d6-510d906a14c5', '6');

select products.*, stocks.count from products join stocks on id = product_id