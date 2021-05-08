Authors: Sang Vo, Hai-Au Bui

- Our app name is : All-4-Pets
- Our database name is : PokeDex

From your command line run yarn run db:import to load your schema
Add insert statements to your Seeder.js file to populate the pet_types table
From your command line run yarn run db:seed

"/pets" => go to home page

"/pets/puppies" => go to puppies page

"/pets/puppies/:id" => go to specific puppy

"/pets/pokemon" => go to pokemon page

"/pets/pokemon/:id" => go to specific pokemon page

"/adoptions/new" => go to surrender form

"/about" => about us page

"/admin" => this for admin to approve adoption application

"/404" => if cannot find a specific id

# command line for running this project
- yarn install
- yarn run dev (from 1 tab)
- yarn run dev:client (other tab)

# start for db
- createdb pokedex
- yarn run db:import => import schema
- can do psql pokedex => to check the schema create 
- get back out and run => yarn run db:seed => populate datas
