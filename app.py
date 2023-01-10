from flask import Flask, render_template, jsonify, request, redirect, url_for

from EmotionDet import GetEmotion

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/happy', methods = ['GET', 'POST'])
def happy():
    return (render_template('happy.html'))

@app.route('/tired', methods = ['GET', 'POST'])
def tired():
    return render_template('tired.html')

@app.route('/sad', methods = ['GET', 'POST'])
def sad():
    return render_template('sad.html')

@app.route('/EmotionDet', methods = ['GET', 'POST'])
def emotionDet():
    temp = {}
    
    ed = GetEmotion()
    t = ed.get_emotion()
    
    temp['emotion'] = t
    
    print(temp)
    return jsonify(temp)

if __name__ == "__main__":
    app.run(debug=True)