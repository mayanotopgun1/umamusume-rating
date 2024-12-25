from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# 评分计算 API
@app.route('/api/calculate-score', methods=['POST'])
def calculate_score():
    data = request.json
    attributes = data.get('attributes', {})
    skills = data.get('skills', [])

    # 评分逻辑
    total_score = 0
    total_score += int(attributes.get('speed', 0))
    total_score += int(attributes.get('endurance', 0))
    total_score += int(attributes.get('power', 0))
    total_score += int(attributes.get('willpower', 0))
    total_score += int(attributes.get('intelligence', 0))
    total_score += len(skills) * 10  # 每个技能加10分

    return jsonify({'score': total_score})

if __name__ == '__main__':
    app.run(debug=True)
