-- CATEGORIES
-- =========================
INSERT INTO category (id, name, description, is_active)
VALUES (gen_random_uuid(), 'Espresso', 'Bold and expressive coffees crafted for espresso brewing.', true),
       (gen_random_uuid(), 'Filter', 'Light roasted coffees highlighting clarity and origin character.', true),
       (gen_random_uuid(), 'Decaf', 'Carefully decaffeinated coffees without sacrificing flavor.', true),
       (gen_random_uuid(), 'Specials', 'Limited and experimental coffees for curious palates.', true);

-- PRODUCTS
-- =========================
INSERT INTO product (id, name, price, is_active, is_offer, category_id)
VALUES
-- Espresso
(gen_random_uuid(), 'Midnight Origin Blend', 12.90, true, false, (SELECT id FROM category WHERE name = 'Espresso')),
(gen_random_uuid(), 'Velvet Dark Roast', 13.50, true, false, (SELECT id FROM category WHERE name = 'Espresso')),
(gen_random_uuid(), 'Bold City Shot', 14.20, true, true, (SELECT id FROM category WHERE name = 'Espresso')),
(gen_random_uuid(), 'Golden Hour Shot', 15.00, true, false, (SELECT id FROM category WHERE name = 'Espresso')),

-- Filter
(gen_random_uuid(), 'Bright Morning Bloom', 16.50, true, false, (SELECT id FROM category WHERE name = 'Filter')),
(gen_random_uuid(), 'Cloud Nine Cup', 17.90, true, true, (SELECT id FROM category WHERE name = 'Filter')),
(gen_random_uuid(), 'Gentle River Brew', 15.80, true, false, (SELECT id FROM category WHERE name = 'Filter')),
(gen_random_uuid(), 'Northern Light Cup', 18.20, true, false, (SELECT id FROM category WHERE name = 'Filter')),

-- Decaf
(gen_random_uuid(), 'Silent Night Cup', 14.90, true, false, (SELECT id FROM category WHERE name = 'Decaf')),
(gen_random_uuid(), 'Smooth Evening Cup', 15.40, true, false, (SELECT id FROM category WHERE name = 'Decaf')),
(gen_random_uuid(), 'Calm Mind Brew', 16.10, true, true, (SELECT id FROM category WHERE name = 'Decaf')),
(gen_random_uuid(), 'Late Sunset Cup', 15.70, true, false, (SELECT id FROM category WHERE name = 'Decaf')),

-- Specials
(gen_random_uuid(), 'Ethiopian Sunrise Reserve', 19.90, true, false, (SELECT id FROM category WHERE name = 'Specials')),
(gen_random_uuid(), 'Panama Geisha Lot', 34.90, true, false, (SELECT id FROM category WHERE name = 'Specials')),
(gen_random_uuid(), 'Fermented Cacao Dream', 21.50, true, true, (SELECT id FROM category WHERE name = 'Specials')),
(gen_random_uuid(), 'Volcanic Soil Selection', 20.80, true, false, (SELECT id FROM category WHERE name = 'Specials'));

-- PRODUCT DETAILS
-- =========================
INSERT INTO product_details (id, origin, roast_level, processing, size_grams, description, product_id)
VALUES (gen_random_uuid(), 'Cerrado Mineiro, Brazil', 'Medium-Dark', 'Natural', 250,
        'A rich and comforting espresso with a smooth body, low acidity, and a lingering chocolate sweetness that works beautifully in milk drinks.',
        (SELECT id FROM product WHERE name = 'Midnight Origin Blend')),

       (gen_random_uuid(), 'Antigua, Guatemala', 'Dark', 'Washed', 250,
        'Deep and velvety with a heavy mouthfeel, delivering classic roast character balanced by subtle nutty sweetness.',
        (SELECT id FROM product WHERE name = 'Velvet Dark Roast')),

       (gen_random_uuid(), 'Mogiana, Brazil', 'Medium-Dark', 'Natural', 250,
        'A bold and structured espresso with pronounced sweetness and a comforting roast profile, ideal for everyday brewing.',
        (SELECT id FROM product WHERE name = 'Bold City Shot')),

       (gen_random_uuid(), 'Huila, Colombia', 'Medium', 'Washed', 250,
        'Balanced and elegant, combining gentle citrus brightness with a smooth chocolate-driven finish.',
        (SELECT id FROM product WHERE name = 'Golden Hour Shot')),

       (gen_random_uuid(), 'Yirgacheffe, Ethiopia', 'Light', 'Washed', 300,
        'A clean and aromatic filter coffee with floral complexity and sparkling acidity, perfect for slow and mindful brewing.',
        (SELECT id FROM product WHERE name = 'Bright Morning Bloom')),

       (gen_random_uuid(), 'Nyeri, Kenya', 'Light', 'Washed', 300,
        'Juicy and expressive with layered fruit notes, offering a vibrant and dynamic filter experience.',
        (SELECT id FROM product WHERE name = 'Cloud Nine Cup')),

       (gen_random_uuid(), 'Cajamarca, Peru', 'Light-Medium', 'Washed', 300,
        'Soft and approachable with rounded sweetness, delivering a smooth and comforting cup.',
        (SELECT id FROM product WHERE name = 'Gentle River Brew')),

       (gen_random_uuid(), 'Gakenke, Rwanda', 'Light', 'Washed', 300,
        'Elegant and refined with delicate fruit notes, tea-like body, and a crisp finish.',
        (SELECT id FROM product WHERE name = 'Northern Light Cup')),

       (gen_random_uuid(), 'Huila, Colombia', 'Medium', 'Sugar Cane Decaf', 250,
        'A smooth and satisfying decaf that keeps its sweetness and body without compromise.',
        (SELECT id FROM product WHERE name = 'Silent Night Cup')),

       (gen_random_uuid(), 'Copán, Honduras', 'Medium', 'Swiss Water', 250,
        'Gentle and balanced, designed for relaxed evenings with a mellow and comforting profile.',
        (SELECT id FROM product WHERE name = 'Smooth Evening Cup')),

       (gen_random_uuid(), 'Chiapas, Mexico', 'Medium', 'Mountain Water Decaf', 250,
        'Round and smooth with subtle sweetness, offering a full-bodied decaf experience.',
        (SELECT id FROM product WHERE name = 'Calm Mind Brew')),

       (gen_random_uuid(), 'Cajamarca, Peru', 'Medium-Light', 'Swiss Water', 250,
        'Light and harmonious with a soft sweetness, ideal for any time of day.',
        (SELECT id FROM product WHERE name = 'Late Sunset Cup')),

       (gen_random_uuid(), 'Sidama, Ethiopia', 'Light', 'Natural', 250,
        'A vibrant and expressive microlot with intense fruit character and floral aromatics.',
        (SELECT id FROM product WHERE name = 'Ethiopian Sunrise Reserve')),

       (gen_random_uuid(), 'Boquete, Panama', 'Light', 'Washed', 200,
        'Exceptionally clean and aromatic, showcasing elegance, clarity, and remarkable complexity.',
        (SELECT id FROM product WHERE name = 'Panama Geisha Lot')),

       (gen_random_uuid(), 'Tarrazú, Costa Rica', 'Light-Medium', 'Anaerobic Fermentation', 250,
        'Experimental and bold with layered sweetness, deep cocoa notes, and a unique fermented character.',
        (SELECT id FROM product WHERE name = 'Fermented Cacao Dream')),

       (gen_random_uuid(), 'Apaneca, El Salvador', 'Light-Medium', 'Honey', 250,
        'Rich and expressive, grown in volcanic soils and offering depth, sweetness, and a smooth mouthfeel.',
        (SELECT id FROM product WHERE name = 'Volcanic Soil Selection'));

-- FLAVOR NOTES
-- =========================
INSERT INTO product_details_flavor_notes (product_details_id, flavor_notes)
SELECT pd.id, note
FROM (VALUES ('Midnight Origin Blend', 'Dark'),
             ('Midnight Origin Blend', 'Chocolate'),
             ('Midnight Origin Blend', 'Hazelnut'),
             ('Midnight Origin Blend', 'Caramel'),
             ('Velvet Dark Roast', 'Cocoa'),
             ('Velvet Dark Roast', 'Almond'),
             ('Velvet Dark Roast', 'Spices'),
             ('Bold City Shot', 'Cocoa'),
             ('Bold City Shot', 'Toffee'),
             ('Bold City Shot', 'Roasted'),
             ('Golden Hour Shot', 'Toffee'),
             ('Golden Hour Shot', 'Orange'),
             ('Golden Hour Shot', 'Chocolate'),
             ('Bright Morning Bloom', 'Citrus'),
             ('Bright Morning Bloom', 'Jasmine'),
             ('Bright Morning Bloom', 'Bergamot'),
             ('Cloud Nine Cup', 'Blackcurrant'),
             ('Cloud Nine Cup', 'Grapefruit'),
             ('Cloud Nine Cup', 'Honey'),
             ('Gentle River Brew', 'Caramel'),
             ('Gentle River Brew', 'Apple'),
             ('Gentle River Brew', 'Almond'),
             ('Northern Light Cup', 'Berry'),
             ('Northern Light Cup', 'Vanilla'),
             ('Northern Light Cup', 'Tea'),
             ('Silent Night Cup', 'Chocolate'),
             ('Silent Night Cup', 'Nut'),
             ('Silent Night Cup', 'Caramel'),
             ('Smooth Evening Cup', 'Cocoa'),
             ('Smooth Evening Cup', 'Vanilla'),
             ('Smooth Evening Cup', 'Malt'),
             ('Calm Mind Brew', 'Milk'),
             ('Calm Mind Brew', 'Chocolate'),
             ('Calm Mind Brew', 'Almond'),
             ('Late Sunset Cup', 'Honey'),
             ('Late Sunset Cup', 'Apple'),
             ('Late Sunset Cup', 'Cocoa'),
             ('Ethiopian Sunrise Reserve', 'Strawberry'),
             ('Ethiopian Sunrise Reserve', 'Blueberry'),
             ('Ethiopian Sunrise Reserve', 'Jasmine'),
             ('Panama Geisha Lot', 'Bergamot'),
             ('Panama Geisha Lot', 'Peach'),
             ('Panama Geisha Lot', 'Floral'),
             ('Fermented Cacao Dream', 'Cocoa'),
             ('Fermented Cacao Dream', 'Rum'),
             ('Fermented Cacao Dream', 'Berries'),
             ('Volcanic Soil Selection', 'Stonefruit'),
             ('Volcanic Soil Selection', 'Caramel'),
             ('Volcanic Soil Selection', 'Cocoa')) AS data(product_name, note)
         JOIN product p ON p.name = data.product_name
         JOIN product_details pd ON pd.product_id = p.id;

-- ADMIN USER
-- password: admin123
-- =========================
INSERT INTO app_user (id, email, password_hash, role, created_at)
VALUES (gen_random_uuid(),
        'admin@morninggrind.de',
        '$2a$10$7QpZlZQZQz8Z8Z8Z8Z8Z8eK9FJp1x2KpF9z0QeZb6Hn9y',
        'ADMIN',
        now());

