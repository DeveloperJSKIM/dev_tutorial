import speech_recognition as sr

r = sr.Recognizer()
with sr.AudioFile('test5.wav') as source:
    audio_text = r.listen(source)
try:
    text=r.recognize_google(audio_text, language='ko-KR')
    print('converting...')
    print(text)
except:
    print('ERROR')