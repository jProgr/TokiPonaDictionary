import sys
from fontTools.subset import main as ss

sys.argv = [
    None,
    '../src/styles/fonts/SourceSansPro-Light.woff',
    '--text-file=chars',
    '--output-file=SubsetSourceSansPro-Light.woff',
    '--flavor=woff',
]
ss()
