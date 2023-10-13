# solid-phoenix
### a starter template for building web app with elixir phoenix backend, and solidjs frontend. 
This is still a wip. I'm making this simply because I used this combination for a previous webapp and it was so fun to use and very simple to implement both a rest api and socket 
connection that can be infinitely modified to suit whatever you need to build. I was about to start another project using the same stack and thought to myself, why don't I just make
a template of sorts so I don't have to rewrite the basic auth and reconfigure the socket server, etc. :)

#### server set up:
1. make sure you have elixir, phoenix, and postgres installed in your machine(if you're unsure about this please check out phoenix installation guide.)
2. run `mix deps.get` to install dependencies
3. this template has very basic auth included, just run `mix ecto.migrate` to run the migration file and create the user and user token tables in postgres.

