# Morning Grind Online Shop

## English Version

### Project Description

This project is a simple online shop for selling coffee products.  
It was designed as a small but complete web application that demonstrates typical e-commerce workflows such as browsing products, managing a shopping cart, and completing an order checkout.

The application is built as a Single Page Application (SPA) with React for the frontend. The backend is implemented using Spring Boot (Java) and exposes a REST API. Data is persisted in a relational PostgreSQL database.

Users can register and log in to the system. Authentication is handled using JSON Web Tokens (JWT), allowing stateless and role-based access control. Administrative functions, such as managing products and categories, are available via secured backend endpoints.

Payment processing is not implemented. The checkout process ends before actual payment handling.

The application provides the following features:

- Product and category overview
- Product detail pages
- Shopping cart functionality
- Checkout process without payment integration
- User registration and login
- Role-based access control (USER / ADMIN)
- Administrative endpoints for managing products and categories

### Technologies Used

- **Frontend**: React, React Router, Vite, Axios, Tailwind CSS
- **Backend**: Java, Spring Boot, Spring Security (JWT), JPA / Hibernate
- **Database**: PostgreSQL
- **Infrastructure**: Docker, Docker Compose

---

## Deutsche Version

### Projektbeschreibung

Dieses Projekt ist ein einfacher Onlineshop zum Verkauf von Kaffeeprodukten.  
Er wurde als schlanke, aber vollständige Webanwendung konzipiert und bildet typische Abläufe eines Onlinekaufs ab, darunter das Durchsuchen von Produkten, die Verwaltung eines Warenkorbs und der Bestellabschluss.

Die Anwendung ist als Single Page Application (SPA) mit React im Frontend umgesetzt. Das Backend basiert auf Spring Boot (Java) und stellt eine REST-API zur Verfügung. Die Daten werden in einer relationalen PostgreSQL-Datenbank gespeichert.

Benutzer können sich registrieren und anmelden. Die Authentifizierung erfolgt über JSON Web Tokens (JWT), wodurch ein zustandsloses und rollenbasiertes Zugriffskonzept umgesetzt wird. Administrative Funktionen wie die Pflege von Produkten und Kategorien stehen über gesicherte Backend-Endpunkte zur Verfügung.

Eine Zahlungsabwicklung ist nicht implementiert. Der Checkout-Prozess endet vor der eigentlichen Zahlung.

Die Anwendung bietet unter anderem folgende Funktionen:

- Produkt- und Kategorienübersicht
- Produktdetailseiten
- Warenkorb-Funktionalität
- Checkout-Prozess ohne Zahlungsintegration
- Registrierung und Login
- Rollenbasierte Zugriffskontrolle (USER / ADMIN)
- Administrative Endpunkte zur Verwaltung von Produkten und Kategorien

### Verwendete Technologien

- **Frontend**: React, React Router, Vite, Axios, Tailwind CSS
- **Backend**: Java, Spring Boot, Spring Security (JWT), JPA / Hibernate
- **Datenbank**: PostgreSQL
- **Infrastruktur**: Docker, Docker Compose
