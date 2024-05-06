from app import app


if __name__ == "__main__":
    app.secret_key = "Secret145"
    # app.run(debug=True)
    from livereload import Server

    app.debug = True
    server = Server(app.wsgi_app)
    server.serve(host="0.0.0.0", port=5000, debug=True)
