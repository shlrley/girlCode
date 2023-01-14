from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask import jsonify
from flask_cors import CORS, cross_origin
from models import db, User, Post
import os

print('Running!');

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['UPLOAD_FOLDER'] = './uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def index():
    posts = Post.query.all()
    return render_template('index.html', posts=posts)

# @app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User(username=username, password=password)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('signup.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username, password=password).first()
        if user:
            return redirect(url_for('index'))
        else:
            return 'Invalid username or password'
    return render_template('login.html')

ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png'}
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route('/create', methods=['GET', 'POST', 'OPTIONS'])
@cross_origin(supports_credentials=True)
def create():
    print("creating!")
    if request.method == 'POST':
        print('test')
        description = request.form['description']
        user_id = request.form['user_id']
        file = request.files['image']
        if file and allowed_file(file.filename):
            filename = file.filename
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            post = Post(image=file.read(), description=description, user_id=user_id)
        else:
            post = Post(image='', description=description, user_id=user_id)
        db.session.add(post)
        db.session.commit()
        print("post!")
        return redirect(url_for('index'))
    print("not post!")
    return render_template('create.html')

@app.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    return jsonify([post.to_dict() for post in posts])