다른 테이블 데이터 결합

select restaurants.id, restaurants.name, addresses.*, types.name as type_name from restaurants 
inner join addresses on (restaurants.address_id = addresses.id)
inner join types on restaurants.type_id = types.⁭id
where addresses.city = 'Munich'


select reviews.*, restaurants.name as restaurant_name, addresses.*, types.name as restaurant_type from reviews 
inner join restaurants on reviews.restaurant_id = restaurants.id
inner join addresses on restaurants.address_id = address_id
inner join types on restaurants.type_id = types.⁭id
where rating > 3