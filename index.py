from flask import Flask,render_template,request
from werkzeug.utils import secure_filename
app=Flask(__name__,template_folder='')
@app.route('/')
def form():
    return render_template('/index.html')

@app.route('/EmployeeSetting')
def employeeSetting():
    return render_template('/Main_File_Employee_Setting.html')

@app.route('/upload', methods = ['POST', 'GET'])
def upload():
   if request.method == 'POST':
      f = request.files['fileToUpload']
      f.save(secure_filename(f.filename))
      return render_template('Main File.html')
app.run(host='localhost', port=5000)


