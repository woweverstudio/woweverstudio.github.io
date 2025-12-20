# WowEverStudio

AI 기술을 활용한 창작 솔루션을 제공하는 스튜디오 웹사이트입니다.

## 🎯 프로젝트 소개

WowEverStudio는 AI를 활용하여 앱, 음악, 콘텐츠 등 다양한 창작물을 제작하는 회사입니다. 
이 웹사이트는 다크 테마와 노란색 포인트 컬러를 사용한 모던한 디자인으로 구성되어 있습니다.

## ✨ 주요 특징

- 🎨 **모던한 디자인**: 다크 배경에 노란색(#FFD700) 포인트 컬러
- 📱 **완벽한 반응형**: 모바일, 태블릿, 데스크톱 모두 지원
- 🧩 **모듈화된 코드**: 재사용 가능한 디자인 시스템
- ⚡ **성능 최적화**: 부드러운 애니메이션과 빠른 로딩
- ♿ **접근성**: 키보드 네비게이션 및 시맨틱 HTML

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 모듈화된 스타일시트
  - Design System (색상, 타이포그래피, 간격)
  - Components (재사용 가능한 UI 컴포넌트)
  - Layout (페이지 구조)
  - Responsive (반응형 디자인)
- **JavaScript (Vanilla)**: 인터랙티브 기능
  - 스크롤 애니메이션
  - 모바일 메뉴
  - 기술 스택 필터링
  - 카운터 애니메이션

## 📁 프로젝트 구조

```
woweverstudio/
├── index.html              # 메인 HTML 파일
├── favicon.svg             # 파비콘
├── README.md              # 프로젝트 문서
├── css/
│   ├── design-system.css  # 디자인 시스템 (색상, 타이포그래피, 변수)
│   ├── components.css     # 재사용 가능한 컴포넌트
│   ├── layout.css         # 레이아웃 및 페이지 구조
│   └── responsive.css     # 반응형 미디어 쿼리
└── js/
    └── main.js            # 메인 JavaScript 로직
```

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary Color**: `#FFD700` (노란색)
- **Background**: `#0A0A0A`, `#141414`, `#1E1E1E`
- **Text**: `#FFFFFF`, `#B0B0B0`, `#808080`

### 타이포그래피

- **Primary Font**: Inter
- **Display Font**: Space Grotesk
- **Mono Font**: JetBrains Mono

### 간격 시스템

CSS 변수를 사용한 일관된 간격 시스템:
- `--spacing-xs` ~ `--spacing-5xl`

## 🚀 시작하기

### 설치

프로젝트를 클론하거나 다운로드합니다:

```bash
git clone <repository-url>
cd woweverstudio
```

### 실행

간단히 `index.html` 파일을 브라우저에서 열면 됩니다.

또는 로컬 서버를 사용하는 경우:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 필요)
npx http-server

# PHP
php -S localhost:8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## 📱 반응형 브레이크포인트

- **Desktop**: 1025px 이상
- **Tablet**: 769px ~ 1024px
- **Mobile**: 768px 이하
- **Small Mobile**: 480px 이하

## 🎯 주요 기능

### 1. 헤더 & 네비게이션
- 스크롤 시 배경 변화
- 모바일 햄버거 메뉴
- 스무스 스크롤
- 활성 섹션 하이라이트

### 2. 히어로 섹션
- 인상적인 타이포그래피
- CTA 버튼
- 배경 그리드 패턴

### 3. 통계 섹션
- 숫자 카운트 애니메이션
- 10+ 경험 년수
- 100+ 완료 프로젝트
- 99% 고객 만족도

### 4. 서비스 섹션
- AI 음악 제작
- 앱 개발
- AI 콘텐츠 제작
- AI 컨설팅

### 5. 기능 섹션
- 확장 가능성
- 미래 지향적 아키텍처
- 포괄적인 기술 스택
- 맞춤형 솔루션

### 6. 기술 스택 섹션
- 필터링 가능한 기술 카드
- AI & ML
- Frontend
- Backend
- Mobile

### 7. 연락처 섹션
- 이메일, 전화, 위치 정보
- CTA 버튼

### 8. 포트폴리오 섹션
- 필터링 가능한 프로젝트 갤러리
- AI Music, Apps, Content 카테고리
- 호버 효과 및 애니메이션

### 9. 푸터
- 네비게이션 링크
- 소셜 미디어 링크
- 저작권 정보

## 🎨 커스터마이징

### 색상 변경

`css/design-system.css` 파일의 `:root` 변수를 수정합니다:

```css
:root {
  --color-primary: #FFD700;  /* 원하는 색상으로 변경 */
  --color-bg-primary: #0A0A0A;
  /* ... */
}
```

### 콘텐츠 변경

`index.html` 파일에서 텍스트 내용을 직접 수정합니다.

### 새로운 컴포넌트 추가

`css/components.css`에 새로운 컴포넌트 스타일을 추가하고, 
디자인 시스템의 변수를 활용합니다.

## 🔧 개발 가이드

### CSS 모듈 사용 순서

1. `design-system.css` - 변수와 기본 스타일
2. `components.css` - UI 컴포넌트
3. `layout.css` - 페이지 레이아웃
4. `responsive.css` - 반응형 오버라이드

### JavaScript 기능 추가

`js/main.js`에 새로운 기능을 추가할 수 있습니다. 
파일은 이미 다음 기능을 포함합니다:

- 스크롤 이벤트 핸들링
- Intersection Observer
- 디바운싱
- 애니메이션

## 📈 성능 최적화

### 스크롤 성능 개선
- ✅ **requestAnimationFrame** 사용으로 부드러운 스크롤
- ✅ **Passive Event Listeners** (`{ passive: true }`)로 스크롤 차단 방지
- ✅ **transform3d 사용**으로 GPU 가속 활성화
- ✅ **will-change 속성** 최적화 (필요시에만 사용, 완료 후 제거)
- ✅ **Intersection Observer** 최적화 (한 번 애니메이션 후 unobserve)

### 렌더링 최적화
- ✅ CSS 변수를 사용한 효율적인 스타일 관리
- ✅ `transform`과 `opacity`만 사용 (리플로우 없는 애니메이션)
- ✅ `translate3d()` 사용으로 GPU 레이어 생성
- ✅ Debounce를 적용한 리사이즈 이벤트
- ✅ 최소한의 JavaScript DOM 조작

### 로딩 최적화
- ✅ 시맨틱 HTML로 SEO 최적화
- ✅ 모듈화된 CSS로 유지보수성 향상
- ✅ Lazy loading 지원 (Intersection Observer)

## 🌐 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- 모바일 브라우저

## 📄 라이선스

© 2025 WowEverStudio. All rights reserved.

## 👥 문의

- **Email**: hello@woweverstudio.com
- **Instagram**: [@woweverstudio](https://instagram.com/woweverstudio)
- **Location**: Seoul, South Korea

## 🔍 성능 최적화 상세

### 스크롤 버벅임 해결
이전에 발생했던 스크롤 버벅임 현상은 다음과 같이 해결되었습니다:

1. **requestAnimationFrame 도입**
   - 모든 스크롤 이벤트를 RAF로 래핑
   - 브라우저의 리페인트 주기에 맞춰 실행
   - 불필요한 연산 제거

2. **Passive Event Listeners**
   ```javascript
   window.addEventListener('scroll', handler, { passive: true });
   ```
   - 스크롤 차단 방지
   - 더 부드러운 스크롤 경험

3. **GPU 가속 활용**
   ```css
   transform: translate3d(0, -8px, 0); /* translateY 대신 */
   ```
   - 3D transform 사용으로 GPU 레이어 생성
   - 하드웨어 가속 활성화

4. **will-change 최적화**
   - 마우스 hover 시에만 활성화
   - 애니메이션 완료 후 제거
   - 메모리 사용량 최소화

5. **Intersection Observer 최적화**
   - 한 번 애니메이션된 요소는 unobserve
   - 불필요한 관찰 중단

---

**Made with ❤️ and AI by WowEverStudio**

