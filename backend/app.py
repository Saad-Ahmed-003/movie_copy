from flask import Flask, jsonify, request
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Replace with your MySQL database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'Saad$123',
    'database': 'mydatabase'
}


@app.route('/movies', methods=['GET'])
def get_movies():
    """Returns a list of movies from the database."""
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Saad$123",
            database="mydatabase"
        )
        cursor = connection.cursor(dictionary=True)  # Use dictionary cursor
        cursor.execute("""SELECT
                        id,
                        name,
                        release_date,
                        genre,
                        image_url,
                        about,
                        actors
                        FROM movies;""")
        movies_data = []
        for movie in cursor:
            movie_data = {
                "id":movie["id"],
                "Name": movie["name"],
                "date": movie["release_date"],
                "genre": movie["genre"],
                "image": movie["image_url"],
                "about": movie["about"],
                "actors": movie["actors"].split(', ')
            }
            movies_data.append(movie_data)
        connection.close()
        return jsonify(movies_data)
    except mysql.connector.Error as err:
        print(f"Error fetching data from database: {err}")
        return jsonify({"error": "Failed to retrieve data from the database."}), 500






@app.route('/submit', methods=['POST'])
def submit_data():
    try:
        data = request.json  
        # Assuming data is sent as JSON
        # Process the data as needed
        # ...

        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        print(data)

        insert_query = "INSERT INTO movies (name, release_date, genre, image_url, about, actors) VALUES (%s, %s, %s, %s, %s, %s)"
        
        # Join the list of actors into a comma-separated string
        actors_str = ', '.join(data["actors"])
        
        values = (data["movieName"], data["releaseDate"], data["genre"], data["imageUrl"], data["details"], actors_str)
        cursor.execute(insert_query, values)

        conn.commit()
        cursor.close()
        conn.close()
        print(type(data))

        return jsonify({'message': 'Data received and processed successfully'})
    except Exception as e:
        # Return an error response
        return jsonify({'error': str(e)}), 500
        
        

    
if __name__ == "__main__":
    app.run(debug=True, port=5050)