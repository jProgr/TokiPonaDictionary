import json

with open('../src/data/toki_pona_dictionary.json', 'r') as file:
    data = json.loads(file.read())

every_meaning = []
for word in data:
    # every_meaning.append(word['word'])
    for meaning in word['meanings']:
        every_meaning.append(meaning[1])

with open('chars', 'a') as file:
    file.write(''.join(every_meaning))
