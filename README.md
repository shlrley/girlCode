# GirlCode 

Contributors: Indy, Jena, Lauren, Shirley 

## Usage

```
# create environment 
conda env create -f environment.yml

# activate environment
conda activate girlcode

# run frontend interface
npm start

# run backend database
cd backend
flask run
```
## Inspiration
We were motivated to develop an application that could connect fashion enthusiasts on a global scale. We recognized that many consumers are overwhelmed by the options available to them online, and wanted to help Aritzia streamline the discovery of new products. We wanted to come up with a solution that brought like-minded fashion enthusiasts together on an integrated platform while allowing users to customer their own experience when it comes to viewing clothing on a user-friendly interface.

## What it does
Inspiritzia is a social platform that enables users to upload photos of their outfits (fit pics) with descriptions and product information that will help others to discover new styles and items that they can then purchase directly from the Aritzia website, generating sales and increasing community engagement. We also created a simple recommender system using the apriori algorithm to suggest products to users based on what other customers are styling.

Our solution directly addresses the problem we identified by allowing customers to discover products through posts from other customers, personalize their e-commerce experience via showing off their styles, saving their favorite looks and receiving product recommendations, and overall promote an inclusive environment by connecting individuals with fashion fans of all sizes and genders. Allowing users to upload and share photos of their outfits containing Aritzia products, as well as interact with other members of the community, will help inspire others to discover their own styles and promote upcoming fashion trends in the industry.

## How we built it
We constructed the back-end model using Python Flask and the front-end with React, using Axios to link routes and API endpoints between the two. Designs were configured using Figma. Databases were exported using sqlite3 and SQLAlchemy.

## Challenges we ran into
As our team had limited back-end web development experience, we struggled with setting up our APIs and having them integrate with the front-end.

## Accomplishments that we're proud of
We’re proud of developing such a technically complex yet user-friendly and uniquely designed website. We developed the webpage, database, and model designs from scratch and also trained a model using item names that were scraped from the Aritzia website. We're proud of the results we were capable of creating as a team!

## What we learned
How to scrape directly from the web without the use of an API, how to set up Flask applications, how to import and export tables from SQL databases into pandas data frames for analysis, how to design meaningful logos and layouts that reflect professional branding and promote positive messaging of a technical product.

## What's next for Inspiritzia
Our team definitely had a lot of features in mind that we unfortunately weren’t able to implement due to time constraints. In the future, we would like to add more features to encourage community engagement such as follow buttons and comment fields. We are also hoping to configure our databases to handle a larger user and product base. We would also like to add more advanced filters to the main feed to help tailor and personalize the browsing experience, such as being able to filter based on a certain style, weather, or occasion, and also filtering by area/location to find what styles other consumers in your area are into.
