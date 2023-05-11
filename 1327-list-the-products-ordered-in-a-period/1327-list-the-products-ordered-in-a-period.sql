# Write your MySQL query statement below
select product_name, sum(Orders.unit) as unit from Products
join Orders
on Orders.product_id = Products.product_id
where left(Orders.order_date, 7) = '2020-02'
group by product_name
having sum(Orders.unit) >= 100
