# 편입수학 3관왕

고려대 · 한양대 · 중앙대 편입수학 통합 교재 (미적분 · 선형대수 · 공학수학).

- 게시본: https://claude.ai/artifact/CyGVyHaXwVVg8ug7UVp6d7
- 소스: `textbook/ch/*.js` (장별 본문), `textbook/lib/` (그림 도우미 · 스타일 · 스크립트)
- 빌드: `cd textbook && npm install && node build.js` → `dist/index.html` (게시용), `dist/preview.html` (로컬 확인용)

빌드는 모든 수식을 KaTeX 로 문법 검사하고, 장 소스에서 역슬래시가 빠진 수식 문자열을 잡아낸다.
