import sys
from fontTools.subset import main as ss

with open('chars', 'r') as file:
    data = file.read()

unique_chars = list(set(data))

code_points = []
for char in unique_chars:
    code_point = int(char.encode('unicode_escape').hex(), 16)
    code_points.append(f'U+{code_point:04X}')

sys.argv = [
    None,
    'src/styles/fonts/SourceSansPro-SemiBold.woff',
    f'--unicodes={",".join(code_points)}',
    '--output-file=SubsetSourceSansPro-SemiBold.woff',
    '--flavor=woff',
]
ss()
