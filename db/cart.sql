select c.cart_id, f.name, f.category, f.price, f.picture, c.user_id, c.quantity
from fry_cart c
    join fry_items f
    on f.item_id = c.item_id
where user_id = $1;