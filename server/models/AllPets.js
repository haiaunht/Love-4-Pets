import pg from "pg"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/pokedex"
})

class AllPets {
  constructor({id, name, imgUrl, img_url, age, vaccinationStatus, vaccination_status, adoptionStory, adoption_story, adoptionStatus, adoption_status, type_id, typeId}) {
    this.id = id
    this.name = name
    this.imgUrl = imgUrl || img_url
    this.age = age
    this.vaccinationStatus = vaccinationStatus || vaccination_status ? "Yes" : "No"
    this.adoptionStory = adoptionStory || adoption_story
    this.adoptionStatus = adoptionStatus || adoption_status ? "Yes" : "No"
    this.type_id = typeId || type_id
  }

  static async findAll() {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM adoptable_pets")

      const pokemonData = result.rows
      const pokemons = pokemonData.map(poke => new this(poke))

      client.release()
      return pokemons
    } catch(err) {
      console.log(err)
      pool.end()
    }
  }

  async save() {
    try {
      const client = await pool.connect()
      const query = "INSERT INTO adoptable_pets (name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id) VALUES ($1, $2, $3, $4, $5, $6, $7)"
      const values = [this.name, this.imgUrl, this.age, this.vaccinationStatus, this.adoptionStory, this.adoptionStatus, this.type_id]
      await client.query(query, values)

      const result = await client.query("SELECT * FROM adoptable_pets ORDER BY id DESC LIMIT 1")
      const newPet = result.rows[0]
      this.id = newPet.id

      client.release()

      return newPet
    } catch (error) {
      console.error(error)
      //pool.end()
    }
  }
}

export default AllPets