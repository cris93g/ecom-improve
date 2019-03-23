insert into fry_cart
    (quantity, item_id, user_id)
values
    ($1, $2, $3)
returning *;