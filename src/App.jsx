import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Cpu,
  Gamepad2,
  BookOpen,
  Trophy,
  Users,
  Layers,
  ExternalLink,
  Github,
  Mail,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Award,
  Calendar,
  MapPin,
  Briefcase,
  Code2,
  Database,
  Wrench,
  Menu,
  X,
  Heart,
  GraduationCap,
  Compass,
  Clock,
  UserCheck,
  FileText,
  Search,
  Bot,
  ListTodo,
  Send,
  Moon,
  Sun,
  Utensils,
} from "lucide-react";

/**
 * ============================================================================
 * 1. PORTFOLIO DATA CONFIGURATION (데이터 분리 영역)
 * 추후 프로젝트, 수상, 활동, 연구 내용을 손쉽게 수정·확장할 수 있도록 구조화했습니다.
 * ============================================================================
 */

const PROFILE_DATA = {
  brand: "SH Portfolio",
  heroGreeting: "HELLO, I'M",
  heroName: "YE KI",
  heroSubtitle: "AI로 문제를 해결하고,\n게임처럼 재미있게 개발합니다.",
  tags: ["Computer Engineering", "Game Engineering", "AI"],
  status: {
    school: "대구가톨릭대학교",
    grade: "3학년",
    gpa: "4.35 / 4.50",
    major: "컴퓨터공학",
    doubleMajor: "게임공학",
  },
  about: {
    title: "Beyond the Code",
    paragraphs: [
      "안녕하세요. 대구가톨릭대학교에서 컴퓨터공학과 게임공학을 공부하고 있는 예성호입니다.",
      "AI와 소프트웨어 기술을 활용해 일상 속 문제를 해결하는 데 관심이 있으며, 개발뿐만 아니라 서비스 기획과 사용자 경험, 디자인에도 관심을 가지고 있습니다.",
      "다양한 프로젝트와 공모전, 연구 활동을 통해 새로운 기술을 탐구하고 아이디어를 실제 서비스로 구현하는 경험을 쌓고 있습니다.",
    ],
    interests: [
      {
        title: "Artificial Intelligence",
        desc: "RAG, LLM 에이전트 및 데이터 기반 예측 모델링을 통한 실용적 문제 해결",
        tag: "AI & ML",
      },
      {
        title: "Game Development",
        desc: "인터랙티브 시스템 설계와 몰입감 있는 플레이 경험 구현",
        tag: "Game Eng",
      },
      {
        title: "UI/UX Design",
        desc: "직관적인 정보 구조와 감각적인 시각 디테일이 살아있는 인터페이스 설계",
        tag: "Design",
      },
    ],
  },
  contact: {
    title: "Let's Build Something Together.",
    description:
      "새로운 기술과 아이디어를 함께 탐구하고 성장할 수 있는 기회를 기대합니다.",
    github: "https://github.com/yeseongho",
    blog: "https://blog.naver.com/tkdtkddmsdlfndjwlsek",
    email: "cjsdbtjdgh7@naver.com",
  },
};

// 실제 프로젝트 이미지 URL이 준비되면 imageUrl 필드에 경로만 입력하면 즉시 교체됩니다.
const PROJECTS_DATA = [
  {
    id: "88-parking",
    number: "PROJECT 01",
    title: "올팍주차: 88 parking",
    category: ["AI / ML", "Web"],
    shortDesc:
      "공공데이터와 AI를 활용하여 올림픽공원의 주차 혼잡도를 예측하고 방문 편의정보를 제공하는 웹 서비스.",
    fullDesc:
      "공공데이터와 AI를 활용하여 올림픽공원의 주차 혼잡도를 예측하고 방문 편의정보를 제공하는 웹 서비스입니다. 공연 일정, 기상 정보, 시간대별 변동 요인을 종합 분석하여 방문객에게 최적의 주차장 구역과 입차 시간대를 안내합니다.",
    techStack: [
      "Python",
      "FastAPI",
      "JavaScript",
      "HTML",
      "CSS",
      "scikit-learn",
      "Public API",
    ],
    period: "2026.11 ~ 2026.11 (추후 상세 일정 수정 가능)",
    role: "기획 · AI 예측 모델링 · 백엔드/프론트엔드 구현",
    awardBadge: "",
    demoUrl: "https://yeseongho.github.io/-88-parking/",
    githubUrl: "",
    notice:
      "※ 안내: 본 서비스의 혼잡도 예측 모델은 가상 학습(시뮬레이션) 데이터를 기반으로 학습되었으며, 공식 실시간 주차 관제 데이터 제공에는 일부 제한이 있습니다.",
    background:
      "대형 공연 및 행사가 빈번한 올림픽공원의 특성상 방문객들이 주차 혼잡도를 사전에 파악하기 어려워 현장 대기 시간이 길어지는 문제를 해결하고자 기획했습니다.",
    features: [
      "주차 혼잡도 예측 (시간대 및 구역별 예상 혼잡 지수 산출)",
      "공연 일정 및 기상정보 공공 API 연동",
      "시간대별 주차 추이 시각화 대시보드",
      "목적지 접근성과 혼잡도를 반영한 맞춤 주차장 추천 정보 제공",
    ],
    troubleshooting:
      "실시간 주차장 점유율 원천 데이터의 접근 제약을 극복하기 위해, 공연 수용 인원·요일·기상 조건을 변수로 반영한 시뮬레이션 학습 파이프라인을 설계하고 사용자에게 예측 한계와 기준을 명확히 고지하는 UX를 적용했습니다.",
    learnings:
      "FastAPI 기반의 경량 예측 API 서버 구축과 공공데이터 전처리 과정을 경험했으며, 데이터 불확실성을 사용자 인터페이스에서 투명하게 전달하는 설계의 중요성을 배웠습니다.",
    images: [
      {
        id: "p1-1",
        caption: "한눈에 보기 — 올림픽공원 주차 현황 및 AI 요약 대시보드",
        variant: "real-parking-main",
        imageUrl: "",
      },
      {
        id: "p1-2",
        caption: "주차장별 예측 — P1~P11 구역별 예상 혼잡 지수 및 추천 후보 비교",
        variant: "real-parking-zones",
        imageUrl: "",
      },
      {
        id: "p1-3",
        caption: "AI 주차 혼잡도 예측 — 날짜·공연 일정 반영 시간대별 혼잡 그래프",
        variant: "real-parking-forecast",
        imageUrl: "",
      },
    ],
  },
  {
    id: "zaemit-website",
    number: "PROJECT 02",
    title: "K리그1 순위 및 승부예측 사이트",
    category: ["AI / ML", "Web"],
    shortDesc:
      "Zaemit의 ChatGPT와 MCP를 연동하여 K리그 축구 리그 순위 및 경기 결과 예측 기능을 제공하는 인터랙티브 웹사이트.",
    fullDesc:
      "ChatGPT와 MCP(Model Context Protocol)를 연동하여 K리그 축구 리그 순위, 팀별 전력 분석 및 남은 일정 기반 최종 순위·승부 예측 기능을 제공하는 웹 서비스입니다.",
    techStack: ["ChatGPT", "MCP", "JavaScript", "Python"],
    period: "추후 수정 가능",
    role: "추후 수정 가능",
    awardBadge: "웹사이트 제작 공모전 특별상 수상",
    demoUrl: "https://wv1789049122147319.zaemit.ai/",
    githubUrl: "",
    notice: "",
    background:
      "단순한 경기 일정 조회를 넘어, 생성형 AI가 최신 리그 흐름과 남은 경기 데이터를 맥락적으로 해석해 팬들에게 직관적인 승부 예측 인사이트를 제공하는 스포츠 데이터 웹 경험을 구현하고자 했습니다.",
    features: [
      "K리그 실시간·예상 순위 테이블 제공 (구단별 승점 및 순위 변동 비교)",
      "남은 일정과 최근 흐름 기반 경기 결과 및 최종 순위 예측",
      "ChatGPT와 MCP 프로토콜 연동을 통한 데이터 기반 AI 질의응답",
    ],
    troubleshooting:
      "LLM이 스포츠 경기 데이터를 일관된 구조로 참조할 수 있도록 MCP 도구 인터페이스를 정형화하고, 웹 프론트엔드에서 순위 예측 지표가 한눈에 들어오도록 시각적 위계를 개선했습니다.",
    learnings:
      "생성형 AI를 단순 챗봇이 아닌 구조화된 웹 서비스의 핵심 엔진으로 결합하는 MCP 아키텍처를 익혔으며, 기획력과 완성도를 인정받아 공모전 특별상을 수상했습니다.",
    images: [
      {
        id: "p2-1",
        caption: "K-RECORD 메인 히어로 — 다음 기록까지, 몇 경기 남았나",
        variant: "real-zaemit-hero",
        imageUrl: "",
      },
      {
        id: "p2-2",
        caption: "K리그 순위 예측 — 구단별 현재 승점 및 AI 최종 예상 순위 비교표",
        variant: "real-zaemit-table",
        imageUrl: "",
      },
    ],
  },
];

// 추후 캡스톤 및 후속 연구가 추가될 때 이 배열에 객체를 추가하면 자동으로 연구 목록과 상세 뷰에 반영됩니다.
const RESEARCH_LIST_DATA = [
  {
    id: "capstone-rag-agent",
    badge: "CAPSTONE RESEARCH · 2026",
    status: "진행 중 / 캡스톤 디자인 연구",
    title:
      "RAG 기반 사내 문서 질의응답 및 회의록 액션아이템 자동화를 위한 업무지원 AI 에이전트 시스템 설계에 관한 연구",
    summary:
      "기업 내부 문서를 효율적으로 활용하기 위한 RAG 기반 질의응답 기능과 회의록에서 주요 업무 및 액션아이템을 추출하는 기능을 통합한 업무지원 AI 에이전트 시스템 설계 연구.",
    keywords: [
      "RAG",
      "LLM",
      "AI Agent",
      "Natural Language Processing",
      "Intelligent Automation",
    ],
    cards: [
      {
        title: "연구 배경 및 필요성",
        content:
          "기업 내 비정형 문서와 회의록이 방대하게 축적되면서 필요한 정책·업무 정보를 신속히 탐색하고, 회의 후 후속 조치를 누락 없이 추적하는 데 많은 인적 비용이 발생합니다.",
      },
      {
        title: "핵심 아키텍처 설계",
        content:
          "사내 문서 임베딩 및 벡터 검색 기반의 근거 중심 질의응답(RAG) 모듈과, 회의록 발화에서 담당자·기한·과업을 구조화하는 액션아이템 추출 에이전트를 단일 파이프라인으로 통합했습니다.",
      },
      {
        title: "기대 효과 및 활용성",
        content:
          "환각(Hallucination)을 최소화한 출처 기반 답변 제공과 회의 종료 직후 자동 태스크 정리를 통해 조직의 반복적인 커뮤니케이션 비용을 절감합니다.",
      },
    ],
    pipelineSteps: [
      {
        id: "ingest",
        step: "STEP 01",
        title: "사내 문서 & 회의록 수집",
        short: "Document & Transcript",
        detail:
          "PDF, 매뉴얼, 위키 등 사내 지식 문서와 비정형 회의록 텍스트를 전처리하고 의미 단위(Chunk)로 분할합니다.",
        tech: "Text Chunking · Metadata Tagging",
      },
      {
        id: "retrieve",
        step: "STEP 02",
        title: "벡터 인덱싱 & 하이브리드 검색",
        short: "Semantic Retrieval",
        detail:
          "질의 의도와 연관성이 높은 사내 문서 청크를 벡터 유사도 및 키워드 매칭으로 정밀 검색하여 컨텍스트를 구성합니다.",
        tech: "Embedding · Vector DB · Top-K Rerank",
      },
      {
        id: "agent",
        step: "STEP 03",
        title: "AI 에이전트 추론 & 구조화",
        short: "LLM Agent Orchestration",
        detail:
          "질의응답 모드에서는 출처 기반 답변을 생성하고, 회의록 분석 모드에서는 핵심 결정사항과 액션아이템(담당자/일정/과업)을 JSON 형태로 추출합니다.",
        tech: "RAG QA · Action-Item Extraction",
      },
      {
        id: "output",
        step: "STEP 04",
        title: "업무 지원 대시보드 연동",
        short: "Actionable Output",
        detail:
          "검증된 답변과 자동 정리된 할 일 목록을 사용자 인터페이스에 제공하여 즉시 업무에 반영할 수 있도록 지원합니다.",
        tech: "Task Automation · Citation View",
      },
    ],
  },
];

const AWARDS_DATA = [
  {
    id: "award-1",
    type: "AWARD",
    iconType: "trophy-silver",
    title: "GKL 치비언 공모전 은상",
    issuer: "GKL (그랜드코리아레저)",
    date: "수상일자 추후 입력",
    summary: "창의적인 아이디어와 기획 역량을 인정받아 은상을 수상했습니다.",
    detail:
      "공모전 주제에 맞춘 차별화된 기획안과 사용자 중심 문제 해결 방안을 제시하여 우수작으로 선정되었습니다. (상세 설명 및 날짜는 추후 수정 가능)",
  },
  {
    id: "award-2",
    type: "AWARD",
    iconType: "medal-design",
    title: "제 2회 시나공 컴활 굿즈 디자인 공모전 입선",
    issuer: "길벗 시나공",
    date: "수상일자 추후 입력",
    summary:
      "학습자의 공감을 이끌어내는 콘셉트와 시각 디자인 완성도로 입선에 선정되었습니다.",
    detail:
      "컴퓨터활용능력 수험생의 학습 경험을 반영한 직관적이고 위트 있는 굿즈 디자인을 기획·제작했습니다. (상세 설명 및 날짜는 추후 수정 가능)",
  },
  {
    id: "award-3",
    type: "AWARD",
    iconType: "trophy-special",
    title: "Zaemit 웹사이트 만들기 공모전 특별상",
    issuer: "Zaemit",
    date: "수상일자 추후 입력",
    summary:
      "ChatGPT와 MCP 연동을 활용한 K리그 순위 및 승부 예측 웹사이트로 특별상을 수상했습니다.",
    detail:
      "생성형 AI와 실시간 데이터 흐름을 웹 서비스에 효과적으로 결합한 기획력과 구현 완성도를 높이 평가받았습니다.",
  },
  {
    id: "award-4",
    type: "AWARD",
    iconType: "badge-volunteer",
    title: "DCU 자원 봉사상",
    issuer: "대구가톨릭대학교",
    date: "수상일자 추후 입력",
    summary:
      "꾸준한 지역사회 나눔과 교내외 봉사활동 공로를 인정받아 수상했습니다.",
    detail:
      "학업과 병행하며 지속적인 봉사 정신을 실천한 공로로 수여받은 교내 포상입니다.",
  },
];

const CERTIFICATIONS_DATA = [
  {
    id: "cert-1",
    type: "CERTIFICATION",
    iconType: "chip",
    title: "AI pot 2급",
    issuer: "AI 활용능력 자격",
    date: "취득일자 추후 입력",
    summary: "생성형 AI 프롬프트 엔지니어링 및 실무 활용 역량 인증 자격입니다.",
    detail:
      "AI 모델의 원리 이해와 프롬프트 설계, 업무 자동화 활용 능력을 검증받았습니다.",
  },
  {
    id: "cert-2",
    type: "CERTIFICATION",
    iconType: "scroll",
    title: "한국사능력검정시험 1급",
    issuer: "국사편찬위원회",
    date: "취득일자 추후 입력",
    summary: "한국사 전반에 대한 심화 이해와 자료 분석 역량을 인증하는 1급 자격을 취득했습니다.",
    detail:
      "체계적인 학습을 통해 한국사능력검정시험 심화 최고 등급인 1급을 취득했습니다.",
  },
  {
    id: "cert-3",
    type: "SW COMPETENCY",
    iconType: "globe",
    title: "TOPCIT 350+",
    issuer: "과학기술정보통신부 · IITP",
    date: "취득일자 추후 입력",
    summary: "소프트웨어 개발, 데이터베이스 구축·운용 및 실무 문제해결 역량을 검증받았습니다.",
    detail:
      "ICT 산업 현장에서 요구하는 기술·비즈니스 통합 역량 평가(TOPCIT)에서 350점 이상의 성적을 보유하고 있습니다.",
  },
];

const ACTIVITIES_DATA = [
  {
    id: "act-1",
    period: "2025.02 ~ 2026.12",
    status: "ACTIVE",
    title: "대구FC 대학생 마케터 상상필드 7기~8기",
    role: "대학생 스포츠 마케터",
    description:
      "프로축구단 대구FC의 온·오프라인 팬 마케팅 기획, 홈경기 현장 이벤트 운영 및 디지털 콘텐츠 제작을 수행하며 사용자(팬) 경험 중심의 커뮤니케이션 역량을 키웠습니다.",
    tags: ["Sports Marketing", "Content Planning", "Fan Experience"],
  },
  {
    id: "act-2",
    period: "2026.03 ~ 2026.06",
    status: "COMPLETED",
    title: "한국미래일보기자단 10기",
    role: "대학생 기자단",
    description:
      "사회·기술 트렌드 및 주요 이슈를 취재하고 기사 콘텐츠를 작성하며, 복잡한 정보를 독자가 이해하기 쉽게 구조화하여 전달하는 역량을 길렀습니다.",
    tags: ["Journalism", "Trend Research", "Storytelling"],
  },
  {
    id: "act-3",
    period: "2022.07 ~ 2022.08",
    status: "COMPLETED",
    title: "대구스마트시티 홍보단 4기",
    role: "스마트시티 홍보 서포터즈",
    description:
      "대구시의 스마트시티 정책과 도시 혁신 기술을 시민들에게 알리는 홍보 콘텐츠를 기획·제작하며 공공 기술 서비스에 대한 관심을 넓혔습니다.",
    tags: ["Smart City", "Public Tech", "Digital PR"],
  },
];

const SKILLS_DATA = [
  {
    category: "Programming",
    subtitle: "Core Languages",
    skills: [
      {
        name: "Python",
        relatedProjects: ["올팍주차: 88 parking", "Zaemit 웹사이트 만들기", "RAG 업무지원 AI 에이전트 연구"],
        experience:
          "FastAPI 백엔드 서버 구축, scikit-learn 기반 예측 모델링, 데이터 전처리 및 LLM/RAG 파이프라인 구현에 주력으로 활용합니다.",
      },
      {
        name: "C",
        relatedProjects: ["전공 시스템 프로그래밍 및 자료구조 실습"],
        experience:
          "메모리 구조, 포인터, 자료구조 및 알고리즘의 저수준 동작 원리를 학습하고 구현하는 데 활용했습니다.",
      },
      {
        name: "JAVA",
        relatedProjects: ["객체지향 소프트웨어 설계 프로젝트"],
        experience:
          "객체지향 프로그래밍(OOP) 원칙에 기반한 클래스 설계 및 애플리케이션 구조화에 활용했습니다.",
      },
    ],
  },
  {
    category: "Web Development",
    subtitle: "Frontend & API Server",
    skills: [
      {
        name: "HTML",
        relatedProjects: ["올팍주차: 88 parking", "Zaemit 웹사이트 만들기"],
        experience:
          "시맨틱 마크업과 웹 접근성을 고려한 대시보드 및 정보 서비스 화면 구조 설계에 활용합니다.",
      },
      {
        name: "CSS",
        relatedProjects: ["올팍주차: 88 parking", "SH Portfolio"],
        experience:
          "반응형 그리드 레이아웃, 모던 다크 테마 UI 스타일링 및 인터랙티브 애니메이션 구현에 활용합니다.",
      },
      {
        name: "FastAPI",
        relatedProjects: ["올팍주차: 88 parking"],
        experience:
          "AI 혼잡도 예측 모델과 공공 API 데이터를 프론트엔드와 연결하는 비동기 REST API 서버 구축에 활용했습니다.",
      },
    ],
  },
  {
    category: "AI & Data",
    subtitle: "Intelligence & Storage",
    skills: [
      {
        name: "Machine Learning",
        relatedProjects: ["올팍주차: 88 parking"],
        experience:
          "공연 규모, 시간대, 기상 변수를 반영한 주차 혼잡도 예측 지도학습 모델 학습 및 검증에 활용했습니다.",
      },
      {
        name: "RAG",
        relatedProjects: ["RAG 업무지원 AI 에이전트 연구"],
        experience:
          "사내 문서 청킹, 임베딩 검색, 출처 기반 질의응답 파이프라인 설계 연구에 활용하고 있습니다.",
      },
      {
        name: "MCP",
        relatedProjects: ["Zaemit 웹사이트 만들기"],
        experience:
          "ChatGPT와 외부 리그 데이터·예측 로직을 표준화된 프로토콜로 연결하는 AI 웹 서비스 구현에 활용했습니다.",
      },
      {
        name: "Data Processing",
        relatedProjects: ["올팍주차: 88 parking", "RAG 업무지원 AI 에이전트 연구"],
        experience:
          "공공 API 응답 정제, 시뮬레이션 학습 데이터셋 생성 및 비정형 텍스트 전처리 파이프라인에 활용합니다.",
      },
      {
        name: "scikit-learn",
        relatedProjects: ["올팍주차: 88 parking"],
        experience:
          "회귀·분류 기반 혼잡도 예측 모델 학습, 피처 엔지니어링 및 성능 평가에 활용했습니다.",
      },
      {
        name: "PostgreSQL",
        relatedProjects: ["서비스 데이터 모델링 및 백엔드 실습"],
        experience:
          "관계형 스키마 설계, 인덱스 최적화 및 정형 서비스 데이터 저장·조회에 활용합니다.",
      },
    ],
  },
  {
    category: "Tools & Design",
    subtitle: "Collaboration & Creative",
    skills: [
      {
        name: "GitHub",
        relatedProjects: ["올팍주차: 88 parking", "SH Portfolio"],
        experience:
          "버전 관리, 브랜치 전략 기반 협업 및 GitHub Pages를 통한 정적 웹 서비스 배포에 활용합니다.",
      },
      {
        name: "VS Code",
        relatedProjects: ["전체 개발 프로젝트"],
        experience:
          "Python, 웹 프론트엔드 및 AI 실험 환경의 메인 통합 개발 환경으로 활용합니다.",
      },
      {
        name: "Figma",
        relatedProjects: ["SH Portfolio", "올팍주차: 88 parking"],
        experience:
          "와이어프레임 설계, 벤토 그리드 UI 시안 제작 및 사용자 플로우 프로토타이핑에 활용합니다.",
      },
      {
        name: "Photoshop",
        relatedProjects: ["대구FC 상상필드 콘텐츠", "공모전 디자인 출품작"],
        experience:
          "스포츠 마케팅 그래픽, 굿즈 디자인 시안 및 시각 에셋 편집에 활용합니다.",
      },
      {
        name: "Procreate",
        relatedProjects: ["굿즈 디자인 공모전", "오리지널 그래픽 에셋"],
        experience:
          "아이디어 스케치, 일러스트레이션 및 개성 있는 그래픽 요소 드로잉에 활용합니다.",
      },
    ],
  },
];

/**
 * ============================================================================
 * 2. CUSTOM RETRO PIXEL SVG GRAPHICS (시안 스타일 픽셀 그래픽)
 * ============================================================================
 */

const PixelCloud = ({ className = "", variant = "blue" }) => (
  <svg
    viewBox="0 0 64 28"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
  >
    {variant === "blue" ? (
      <>
        <rect x="20" y="2" width="20" height="4" fill="#6E8BFF" />
        <rect x="14" y="6" width="32" height="4" fill="#5D7CF6" />
        <rect x="8" y="10" width="44" height="4" fill="#4D7CFE" />
        <rect x="4" y="14" width="54" height="4" fill="#3B63D6" />
        <rect x="2" y="18" width="60" height="4" fill="#2A469E" />
        <rect x="8" y="22" width="48" height="4" fill="#1D3173" />
      </>
    ) : (
      <>
        <rect x="22" y="4" width="16" height="4" fill="#374B8A" />
        <rect x="14" y="8" width="32" height="4" fill="#2B3C73" />
        <rect x="6" y="12" width="48" height="4" fill="#212F5E" />
        <rect x="10" y="16" width="40" height="4" fill="#182349" />
      </>
    )}
  </svg>
);

const PixelHeart = ({ filled = true }) => (
  <svg
    viewBox="0 0 16 14"
    className="w-4 h-4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
  >
    <rect x="2" y="0" width="4" height="2" fill={filled ? "#FF8FAB" : "#334155"} />
    <rect x="10" y="0" width="4" height="2" fill={filled ? "#FF8FAB" : "#334155"} />
    <rect x="0" y="2" width="7" height="2" fill={filled ? "#FF6B95" : "#334155"} />
    <rect x="9" y="2" width="7" height="2" fill={filled ? "#FF6B95" : "#334155"} />
    <rect x="2" y="2" width="2" height="2" fill="#FFD6E0" />
    <rect x="0" y="4" width="16" height="4" fill={filled ? "#F45B84" : "#334155"} />
    <rect x="2" y="8" width="12" height="2" fill={filled ? "#E04872" : "#334155"} />
    <rect x="4" y="10" width="8" height="2" fill={filled ? "#C93B63" : "#334155"} />
    <rect x="6" y="12" width="4" height="2" fill={filled ? "#B03054" : "#334155"} />
  </svg>
);

const PixelAvatarMini = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8 rounded-full border border-[#4D7CFE]/60 bg-[#131C35] p-0.5"
    shapeRendering="crispEdges"
  >
    <rect x="6" y="3" width="12" height="4" fill="#0F172A" />
    <rect x="4" y="5" width="16" height="6" fill="#1E293B" />
    <rect x="7" y="5" width="4" height="2" fill="#60A5FA" />
    <rect x="6" y="10" width="12" height="8" fill="#FDE6D8" />
    <rect x="8" y="12" width="2" height="3" fill="#0F172A" />
    <rect x="14" y="12" width="2" height="3" fill="#0F172A" />
    <rect x="7" y="15" width="2" height="1" fill="#FDA4AF" />
    <rect x="15" y="15" width="2" height="1" fill="#FDA4AF" />
    <rect x="6" y="18" width="12" height="5" fill="#3B82F6" />
    <rect x="9" y="18" width="6" height="5" fill="#F8FAFC" />
  </svg>
);

// 시간대 판별 헬퍼 (12:00~13:00, 17:00~18:00 식사 / 23:00~08:00 수면 / 그 외 코딩)
const getTimeMode = () => {
  const h = new Date().getHours();
  if ((h >= 12 && h < 13) || (h >= 17 && h < 18)) return "eating";
  if (h >= 23 || h < 8) return "sleeping";
  return "coding";
};


// 메인 히어로 캐릭터 (참조 이미지 느낌을 살린 코지 픽셀풍 SVG 캐릭터 + 클릭 인사 + 식사/수면 모드)
const HeroPixelCharacter = ({ onCharacterClick }) => {
  const [clickCount, setClickCount] = useState(0);
  const [showGreeting, setShowGreeting] = useState(false);
  const [timeMode, setTimeMode] = useState(() => getTimeMode());
  const [manualOverride, setManualOverride] = useState(null); // null | 'coding' | 'eating' | 'sleeping'
  const greetingTimerRef = useRef(null);

  useEffect(() => {
    const checkTime = () => {
      setTimeMode(getTimeMode());
    };
    const interval = setInterval(checkTime, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => {
      if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current);
    };
  }, []);

  const currentMode = manualOverride !== null ? manualOverride : timeMode;
  const isSleeping = currentMode === 'sleeping';
  const isEating = currentMode === 'eating';

  const handleCycleMode = () => {
    const order = ['coding', 'eating', 'sleeping'];
    const nextIdx = (order.indexOf(currentMode) + 1) % order.length;
    setManualOverride(order[nextIdx]);
  };

  const handleClick = () => {
    setShowGreeting(true);
    if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current);
    greetingTimerRef.current = setTimeout(() => {
      setShowGreeting(false);
    }, 3200);

    const next = clickCount + 1;
    if (next >= 5) {
      setClickCount(0);
      onCharacterClick(true);
    } else {
      setClickCount(next);
      onCharacterClick(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none group">
      {showGreeting && (
        <div
          key={clickCount}
          className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap animate-bounce"
        >
          <div className="relative bg-white text-[#0F172A] px-4 py-2 rounded-2xl border-2 border-[#4D7CFE] shadow-[0_8px_24px_rgba(77,124,254,0.45)] text-xs sm:text-sm font-bold tracking-tight">
            안녕하세요 잘부탁드립니다
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r-2 border-b-2 border-[#4D7CFE] rotate-45" />
          </div>
        </div>
      )}

      <div className="absolute w-80 h-80 rounded-full bg-[#4D7CFE]/18 blur-3xl pointer-events-none" />

      <button
        type="button"
        onClick={handleClick}
        aria-label="예성호 일러스트 캐릭터 (클릭 시 인사, 5번 클릭 시 폭죽)"
        className="relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#81D4FF] rounded-3xl p-1 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
      >
        <svg
          viewBox="0 0 320 270"
          className="w-[280px] h-[238px] sm:w-[330px] sm:h-[282px] drop-shadow-[0_16px_32px_rgba(5,10,28,0.88)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hairFill" x1="116" y1="56" x2="189" y2="131" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#293A7C" />
              <stop offset="52%" stopColor="#182554" />
              <stop offset="100%" stopColor="#101A3A" />
            </linearGradient>
            <linearGradient id="skinFill" x1="118" y1="94" x2="173" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFEADF" />
              <stop offset="100%" stopColor="#F5C8B0" />
            </linearGradient>
            <linearGradient id="hoodieMain" x1="107" y1="143" x2="182" y2="202" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#72A9FF" />
              <stop offset="55%" stopColor="#4D7CFE" />
              <stop offset="100%" stopColor="#2D5CE8" />
            </linearGradient>
            <linearGradient id="hoodieShade" x1="127" y1="150" x2="178" y2="198" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F8FBFF" />
              <stop offset="100%" stopColor="#DCEBFF" />
            </linearGradient>
            <linearGradient id="screenGlow" x1="35" y1="145" x2="104" y2="198" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3A4F88" />
              <stop offset="100%" stopColor="#131C35" />
            </linearGradient>
            <linearGradient id="headphoneShell" x1="180" y1="87" x2="226" y2="126" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="catWhite" x1="235" y1="188" x2="292" y2="226" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E5ECF8" />
            </linearGradient>
            <radialGradient id="starAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8FD8FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4D7CFE" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g className="animate-pulse">
            <circle cx="72" cy="34" r="11" fill="url(#starAura)" />
            <path d="M72 24V44M62 34H82" stroke="#9AD8FF" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M150 18V28M145 23H155" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round" />
            <path d="M260 50V62M254 56H266" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            <circle cx="256" cy="146" r="12" fill="url(#starAura)" />
            <path d="M256 136V156M246 146H266" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M39 116V126M34 121H44" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
          </g>

          <g transform="translate(10, 208)">
            <path d="M4 14C4 9 8 6 11 14" fill="#22C55E" />
            <path d="M11 14C11 4 16 2 19 14" fill="#4ADE80" />
            <path d="M18 14C19 9 23 7 25 14" fill="#16A34A" />
          </g>

          {isSleeping ? (
            <g className="animate-hero-float">
              <rect x="200" y="20" width="76" height="36" rx="14" fill="#131C35" stroke="#81D4FF" strokeWidth="2.2" />
              <path d="M220 56L214 66L228 56" fill="#131C35" stroke="#81D4FF" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M219 55.5H229" stroke="#131C35" strokeWidth="3" />
              <text x="238" y="42" textAnchor="middle" fill="#E0F2FE" fontSize="12" fontWeight="700" fontFamily="Pretendard, sans-serif">
                자는 중..
              </text>
              <text x="185" y="52" fill="#9BD8FF" fontSize="16" fontWeight="800" fontFamily="Space Grotesk, sans-serif">Z</text>
              <text x="196" y="38" fill="#A78BFA" fontSize="11" fontWeight="800" fontFamily="Space Grotesk, sans-serif">z</text>
            </g>
          ) : isEating ? (
            <g className="animate-hero-float">
              <rect x="194" y="20" width="88" height="36" rx="14" fill="#131C35" stroke="#FBBF24" strokeWidth="2.2" />
              <path d="M218 56L212 66L228 56" fill="#131C35" stroke="#FBBF24" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M217 55.5H229" stroke="#131C35" strokeWidth="3" />
              <text x="238" y="42" textAnchor="middle" fill="#FEF3C7" fontSize="12" fontWeight="700" fontFamily="Pretendard, sans-serif">
                밥먹는 중 !
              </text>
            </g>
          ) : (
            <g className="animate-hero-float">
              <rect x="222" y="26" width="50" height="42" rx="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
              <path d="M236 68L232 79L244 68" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
              <path d="M233.5 67.5H246" stroke="#FFFFFF" strokeWidth="3" />
              <path
                d="M247 57C247 57 236 50 236 44C236 40.8 238.5 38.3 241.8 38.3C244 38.3 245.8 39.5 247 41.3C248.2 39.5 250 38.3 252.2 38.3C255.5 38.3 258 40.8 258 44C258 50 247 57 247 57Z"
                fill="#F35C8B"
                stroke="#0F172A"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </g>
          )}

          <ellipse cx="160" cy="236" rx="123" ry="8" fill="#050917" opacity="0.82" />

          <g className={isSleeping ? '' : 'animate-hero-breathe'}>
            <g transform={isEating ? 'translate(233,184)' : 'translate(230,186)'} className={isSleeping ? '' : 'animate-hero-float'}>
              <path d="M3 24C3 11 13 2 30 2C45 2 55 9 57 21C59 31 51 40 37 41H20C9 41 3 34 3 24Z" fill="url(#catWhite)" stroke="#13203C" strokeWidth="2.3" />
              <path d="M10 12L16 3L21 13" fill="#F8FAFC" stroke="#13203C" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M27 11L34 2L38 13" fill="#F8FAFC" stroke="#13203C" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M9 20C15 16 23 15 31 16C42 17 49 21 54 28" stroke="#C8D4E9" strokeWidth="2" strokeLinecap="round" />
              {isSleeping ? (
                <>
                  <path d="M17 22C19 24 22 24 24 22" stroke="#13203C" strokeWidth="2" strokeLinecap="round" />
                  <path d="M28 22C30 24 33 24 35 22" stroke="#13203C" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <circle cx="21" cy="22" r="2.1" fill="#13203C" />
                  <circle cx="33" cy="22" r="2.1" fill="#13203C" />
                </>
              )}
              <path d="M23 29C25.5 31.5 29.5 31.5 32 29" stroke="#13203C" strokeWidth="2" strokeLinecap="round" />
              <path d="M45 13C55 14 62 21 61 34" stroke="#13203C" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M48 17C56 20 59 25 58 33" stroke="#F9A8D4" strokeWidth="1.7" strokeLinecap="round" />
            </g>

            <path d="M103 195C89 195 79 203 79 213C79 219 86 223 97 223H188C201 223 210 218 210 211C210 202 199 195 184 195H103Z" fill="#202C57" stroke="#0F172A" strokeWidth="2.5" />
            <ellipse cx="154" cy="211" rx="21" ry="11" fill="#2A3766" stroke="#0F172A" strokeWidth="2.2" />

            <path d="M175 142C191 144 203 157 203 175C203 191 195 201 180 201H169V142H175Z" fill="url(#hoodieMain)" stroke="#0F172A" strokeWidth="2.5" />
            <path d="M186 151C192 155 195 162 194 175" stroke="#BEE1FF" strokeWidth="2" strokeLinecap="round" />

            <path d="M118 143C118 134 129 129 151 129C174 129 186 136 186 150V194C186 200 180 203 171 203H127C118 203 114 198 114 191L118 143Z" fill="url(#hoodieShade)" stroke="#0F172A" strokeWidth="2.5" />
            <path d="M124 138C131 147 145 151 161 149C176 148 186 142 189 134C192 127 182 124 167 124H133C124 124 120 132 124 138Z" fill="url(#hoodieMain)" stroke="#0F172A" strokeWidth="2.3" />
            <path d="M144 149V187M157 149V187" stroke="#87B9FF" strokeWidth="2.2" strokeLinecap="round" />

            {isEating ? (
              <>
                <path d="M105 95C105 74 124 60 151 60C176 60 192 76 192 98C192 121 177 135 149 135C121 135 105 121 105 95Z" fill="url(#skinFill)" stroke="#0F172A" strokeWidth="2.5" />
                <path d="M117 105C120 100 126 100 130 105" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M147 105C150 100 156 100 160 105" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" />
                <ellipse cx="118" cy="114" rx="5.5" ry="3.2" fill="#FDA4AF" opacity="0.72" />
                <ellipse cx="158" cy="114" rx="5.5" ry="3.2" fill="#FDA4AF" opacity="0.72" />
                <ellipse cx="139" cy="118" rx="4.2" ry="3.2" fill="#F35C8B" stroke="#0F172A" strokeWidth="1.5" />

                <path d="M99 97C96 76 106 53 129 44C121 43 114 45 108 49C116 39 132 34 151 35C178 36 201 51 208 74C213 91 209 109 199 118C196 106 190 98 183 93C178 99 171 101 162 99C156 91 147 87 138 89C132 96 124 99 114 98C108 92 102 93 99 97Z" fill="url(#hairFill)" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M111 71C116 63 125 57 136 55" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />

                <path d="M130 36C153 33 182 48 189 81" stroke="#F8FAFC" strokeWidth="6.5" strokeLinecap="round" />
                <path d="M130 36C153 33 182 48 189 81" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="190" cy="98" rx="14" ry="17" fill="url(#headphoneShell)" stroke="#0F172A" strokeWidth="2.4" />
                <ellipse cx="187" cy="98" rx="8" ry="10.5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />

                <g>
                  <path d="M99 159C102 146 134 146 138 159Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
                  <path d="M95 159H142C141 173 132 180 119 180C106 180 97 173 95 159Z" fill="#F3F6FC" stroke="#0F172A" strokeWidth="2.3" />
                  <path d="M98 165H140" stroke="#4D7CFE" strokeWidth="2.2" />
                  <path d="M108 146C106 140 110 136 108 130" stroke="#E2E8F0" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
                  <path d="M123 146C121 139 125 135 123 129" stroke="#E2E8F0" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
                  <ellipse cx="103" cy="171" rx="7" ry="5.5" fill="url(#skinFill)" stroke="#0F172A" strokeWidth="2" />
                </g>

                <g className="animate-eat-chopsticks">
                  <path d="M169 154C181 157 182 169 168 171L153 170" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="154" y1="168" x2="123" y2="150" stroke="#D97706" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="153" y1="172" x2="122" y2="155" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="153" cy="170" r="6" fill="url(#skinFill)" stroke="#0F172A" strokeWidth="2" />
                </g>
              </>
            ) : isSleeping ? (
              <>
                <path d="M116 170C128 162 159 162 171 171C177 176 174 186 163 186H124C113 186 110 176 116 170Z" fill="#F0F5FD" stroke="#0F172A" strokeWidth="2.4" />
                <g transform="translate(-4, 15) rotate(-8 149 102)">
                  <path d="M105 95C105 74 124 60 151 60C176 60 192 76 192 98C192 121 177 135 149 135C121 135 105 121 105 95Z" fill="url(#skinFill)" stroke="#0F172A" strokeWidth="2.5" />
                  <path d="M116 107C120 111 127 111 131 107" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M148 107C152 111 159 111 163 107" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" />
                  <ellipse cx="118" cy="116" rx="5.5" ry="3" fill="#FDA4AF" opacity="0.65" />
                  <ellipse cx="157" cy="116" rx="5.5" ry="3" fill="#FDA4AF" opacity="0.65" />
                  <circle cx="139" cy="118" r="2.1" fill="#B45309" />

                  <path d="M99 97C96 76 106 53 129 44C121 43 114 45 108 49C116 39 132 34 151 35C178 36 201 51 208 74C213 91 209 109 199 118C196 106 190 98 183 93C178 99 171 101 162 99C156 91 147 87 138 89C132 96 124 99 114 98C108 92 102 93 99 97Z" fill="url(#hairFill)" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
                  <path d="M130 36C153 33 182 48 189 81" stroke="#F8FAFC" strokeWidth="6.5" strokeLinecap="round" />
                  <path d="M130 36C153 33 182 48 189 81" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="190" cy="98" rx="14" ry="17" fill="url(#headphoneShell)" stroke="#0F172A" strokeWidth="2.4" />
                  <ellipse cx="187" cy="98" rx="8" ry="10.5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
                </g>
              </>
            ) : (
              <>
                <path d="M169 149C181 151 186 163 182 175C178 184 164 185 145 183" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
                <ellipse cx="139" cy="182" rx="8" ry="6" fill="url(#skinFill)" stroke="#0F172A" strokeWidth="2" />

                <path d="M105 95C105 74 124 60 151 60C176 60 192 76 192 98C192 121 177 135 149 135C121 135 105 121 105 95Z" fill="url(#skinFill)" stroke="#0F172A" strokeWidth="2.5" />
                <g className="animate-hero-blink" style={{ transformOrigin: '140px 104px' }}>
                  <rect x="118" y="96" width="11" height="14" rx="5.5" fill="#0F172A" />
                  <circle cx="121" cy="100" r="2.1" fill="#FFFFFF" />
                  <rect x="149" y="96" width="11" height="14" rx="5.5" fill="#0F172A" />
                  <circle cx="152" cy="100" r="2.1" fill="#FFFFFF" />
                </g>
                <ellipse cx="118" cy="115" rx="5" ry="2.8" fill="#FDA4AF" opacity="0.62" />
                <ellipse cx="158" cy="115" rx="5" ry="2.8" fill="#FDA4AF" opacity="0.62" />
                <path d="M136 117C138 119.5 143 119.5 145 117" stroke="#9A3412" strokeWidth="2.1" strokeLinecap="round" />

                <path d="M99 97C96 76 106 53 129 44C121 43 114 45 108 49C116 39 132 34 151 35C178 36 201 51 208 74C213 91 209 109 199 118C196 106 190 98 183 93C178 99 171 101 162 99C156 91 147 87 138 89C132 96 124 99 114 98C108 92 102 93 99 97Z" fill="url(#hairFill)" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M111 71C116 63 125 57 136 55" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.82" />
                <ellipse cx="142" cy="53" rx="5" ry="2.4" fill="#6C7DFF" opacity="0.56" />
                <ellipse cx="155" cy="54" rx="4" ry="2" fill="#6C7DFF" opacity="0.44" />

                <path d="M130 36C153 33 182 48 189 81" stroke="#F8FAFC" strokeWidth="6.5" strokeLinecap="round" />
                <path d="M130 36C153 33 182 48 189 81" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="190" cy="98" rx="14" ry="17" fill="url(#headphoneShell)" stroke="#0F172A" strokeWidth="2.4" />
                <ellipse cx="187" cy="98" rx="8" ry="10.5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
              </>
            )}

            {isEating ? (
              <g opacity="0.68">
                <rect x="58" y="201" width="74" height="6" rx="3" fill="#3B4D7A" stroke="#0F172A" strokeWidth="2.1" />
                <rect x="56" y="207" width="78" height="5" rx="2.5" fill="#93A7C8" stroke="#0F172A" strokeWidth="1.9" />
              </g>
            ) : (
              <g>
                <path d="M39 143H116L139 187H65C51 187 39 176 39 163V143Z" fill="url(#screenGlow)" stroke="#0F172A" strokeWidth="2.7" strokeLinejoin="round" />
                <path d="M66 160L77 171L93 153" stroke="#DCE9FF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M99 153L92 160L99 167" stroke="#DCE9FF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M113 153L120 160L113 167" stroke="#DCE9FF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M64 188H140C142 193 140 199 136 201H54C47 201 41 196 41 189L64 188Z" fill="#9AAACE" stroke="#0F172A" strokeWidth="2.5" strokeLinejoin="round" />
              </g>
            )}
          </g>
        </svg>
      </button>

      <div className="mt-3 flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={handleCycleMode}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#10192F]/85 px-3 py-1.5 text-[11px] sm:text-xs text-slate-200 shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition hover:border-[#4D7CFE]/60 hover:bg-[#13203C]"
        >
          {isSleeping ? (
            <>
              <Moon className="w-3 h-3 text-[#81D4FF]" />
              <span>23:00~08:00 수면 모드 · 클릭해 전환</span>
            </>
          ) : isEating ? (
            <>
              <Utensils className="w-3 h-3 text-amber-300" />
              <span>12~13시·17~18시 식사 모드 · 클릭해 전환</span>
            </>
          ) : (
            <>
              <Sun className="w-3 h-3 text-amber-300" />
              <span>개발 집중 모드 · 클릭해 전환</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// 캐릭터 5회 클릭 시 화면 전체에 터지는 레트로 픽셀 폭죽 효과
const FireworksEffect = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const bursts = [
    { id: 1, left: "22%", top: "24%", delay: "0s", colors: ["#4D7CFE", "#81D4FF", "#FFFFFF", "#A78BFA"] },
    { id: 2, left: "74%", top: "20%", delay: "0.25s", colors: ["#F43F5E", "#FBBF24", "#FDE68A", "#FFFFFF"] },
    { id: 3, left: "52%", top: "32%", delay: "0.5s", colors: ["#34D399", "#81D4FF", "#A78BFA", "#FFFFFF"] },
    { id: 4, left: "34%", top: "45%", delay: "0.85s", colors: ["#FBBF24", "#FB7185", "#60A5FA", "#FFFFFF"] },
    { id: 5, left: "78%", top: "44%", delay: "1.1s", colors: ["#A78BFA", "#81D4FF", "#F472B6", "#FFFFFF"] },
    { id: 6, left: "48%", top: "22%", delay: "1.45s", colors: ["#60A5FA", "#FDE047", "#34D399", "#FFFFFF"] },
  ];

  const angles = Array.from({ length: 16 }, (_, idx) => (idx * 360) / 16);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="absolute"
          style={{ left: burst.left, top: burst.top }}
        >
          {/* 중심 섬광 */}
          <div
            className="w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white animate-firework-flash"
            style={{ animationDelay: burst.delay }}
          />
          {/* 16방향 픽셀 파티클 */}
          {angles.map((deg, idx) => {
            const rad = (deg * Math.PI) / 180;
            const dist = idx % 2 === 0 ? 96 : 64;
            const tx = Math.round(Math.cos(rad) * dist);
            const ty = Math.round(Math.sin(rad) * dist);
            const color = burst.colors[idx % burst.colors.length];
            return (
              <span
                key={deg}
                className="absolute w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 animate-firework-particle"
                style={{
                  backgroundColor: color,
                  boxShadow: `0 0 8px ${color}`,
                  "--tx": `${tx}px`,
                  "--ty": `${ty}px`,
                  animationDelay: burst.delay,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

// Bento Grid 6개 메뉴 전용 레트로 픽셀 아이콘 (첨부 시안 스타일)
const BentoMenuIcon = ({ type }) => {
  switch (type) {
    case "about":
      return (
        <svg viewBox="0 0 36 28" className="w-11 h-9" shapeRendering="crispEdges">
          <rect x="2" y="2" width="32" height="24" rx="2" fill="#38BDF8" />
          <rect x="4" y="4" width="28" height="20" fill="#7DD3FC" />
          <rect x="6" y="7" width="9" height="11" fill="#0284C7" />
          <rect x="9" y="9" width="3" height="3" fill="#FDE6D8" />
          <rect x="7" y="13" width="7" height="4" fill="#1E3A8A" />
          <rect x="18" y="8" width="11" height="2" fill="#0369A1" />
          <rect x="18" y="12" width="9" height="2" fill="#0369A1" />
          <rect x="18" y="16" width="11" height="2" fill="#0369A1" />
        </svg>
      );
    case "projects":
      return (
        <svg viewBox="0 0 36 28" className="w-11 h-9" shapeRendering="crispEdges">
          <rect x="2" y="2" width="32" height="24" fill="#4F46E5" />
          <rect x="4" y="4" width="28" height="4" fill="#60A5FA" />
          <rect x="4" y="8" width="28" height="16" fill="#1E293B" />
          <rect x="10" y="14" width="2" height="2" fill="#38BDF8" />
          <rect x="8" y="16" width="2" height="2" fill="#38BDF8" />
          <rect x="10" y="18" width="2" height="2" fill="#38BDF8" />
          <rect x="17" y="13" width="2" height="8" fill="#A78BFA" />
          <rect x="24" y="14" width="2" height="2" fill="#38BDF8" />
          <rect x="26" y="16" width="2" height="2" fill="#38BDF8" />
          <rect x="24" y="18" width="2" height="2" fill="#38BDF8" />
        </svg>
      );
    case "research":
      return (
        <svg viewBox="0 0 36 28" className="w-11 h-9" shapeRendering="crispEdges">
          <rect x="3" y="5" width="30" height="20" fill="#4338CA" />
          <rect x="5" y="4" width="12" height="18" fill="#E0E7FF" />
          <rect x="19" y="4" width="12" height="18" fill="#C7D2FE" />
          <rect x="17" y="5" width="2" height="18" fill="#6366F1" />
          <rect x="7" y="8" width="8" height="2" fill="#818CF8" />
          <rect x="7" y="12" width="8" height="2" fill="#818CF8" />
          <rect x="7" y="16" width="6" height="2" fill="#818CF8" />
          <rect x="21" y="8" width="8" height="2" fill="#6366F1" />
          <rect x="21" y="12" width="8" height="2" fill="#6366F1" />
          <rect x="21" y="16" width="6" height="2" fill="#6366F1" />
        </svg>
      );
    case "awards":
      return (
        <svg viewBox="0 0 36 28" className="w-11 h-9" shapeRendering="crispEdges">
          <rect x="11" y="3" width="14" height="11" fill="#FACC15" />
          <rect x="7" y="5" width="4" height="6" fill="#EAB308" />
          <rect x="25" y="5" width="4" height="6" fill="#EAB308" />
          <rect x="13" y="5" width="3" height="7" fill="#FEF08A" />
          <rect x="13" y="14" width="10" height="3" fill="#CA8A04" />
          <rect x="16" y="17" width="4" height="4" fill="#FACC15" />
          <rect x="11" y="21" width="14" height="4" fill="#B45309" />
          <rect x="12" y="22" width="12" height="2" fill="#F59E0B" />
        </svg>
      );
    case "activities":
      return (
        <svg viewBox="0 0 36 28" className="w-11 h-9" shapeRendering="crispEdges">
          <rect x="15" y="4" width="6" height="6" fill="#7DD3FC" />
          <rect x="12" y="11" width="12" height="9" fill="#38BDF8" />
          <rect x="6" y="7" width="5" height="5" fill="#60A5FA" />
          <rect x="4" y="13" width="8" height="8" fill="#2563EB" />
          <rect x="25" y="7" width="5" height="5" fill="#60A5FA" />
          <rect x="24" y="13" width="8" height="8" fill="#2563EB" />
          <rect x="10" y="20" width="16" height="4" fill="#1D4ED8" />
        </svg>
      );
    case "skills":
    default:
      return (
        <svg viewBox="0 0 36 28" className="w-11 h-9" shapeRendering="crispEdges">
          <polygon points="18,3 31,9 18,15 5,9" fill="#67E8F9" />
          <polygon points="18,10 31,15 18,20 5,15" fill="#38BDF8" />
          <polygon points="18,16 31,21 18,26 5,21" fill="#6366F1" />
        </svg>
      );
  }
};

// 프로젝트 썸네일 및 상세 갤러리 일러스트 (첨부해주신 실제 서비스 스크린샷 정밀 재현 + 실제 이미지 URL 교체 지원)
const ProjectPixelArtwork = ({ variant, imageUrl, alt }) => {
  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover object-top"
      />
    );
  }

  switch (variant) {
    // ① 올팍주차: 88 parking - 한눈에 보기 (첫 번째 첨부 이미지)
    case "real-parking-main":
      return (
        <div className="w-full h-full flex bg-[#F4F6FA] text-[#1E293B] select-none overflow-hidden text-left font-sans">
          <div className="w-[26%] bg-[#2B3A55] text-white p-2.5 sm:p-3.5 flex flex-col justify-between shrink-0">
            <div>
              <div className="font-extrabold text-[11px] sm:text-sm tracking-tight leading-none">
                올팍주차:<span className="text-[#E2B857]">88</span>
              </div>
              <div className="text-[8px] sm:text-[10px] text-slate-300 font-semibold mt-0.5">
                parking
              </div>
              <div className="text-[6px] sm:text-[7px] text-slate-400 tracking-wider mt-1">
                PARKING · SINCE 1988
              </div>

              <div className="flex items-center -space-x-1 my-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#3B82F6]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#EAB308]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#94A3B8]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#22C55E]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#EF4444]" />
              </div>

              <div className="space-y-1 mt-2">
                <div className="bg-white text-[#1E293B] font-bold text-[8px] sm:text-[10px] px-2 py-1 rounded shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#2B3A55]" />
                  한눈에 보기
                </div>
                <div className="text-slate-300 text-[7px] sm:text-[9px] px-2 py-0.5">
                  AI 혼잡도 예측
                </div>
                <div className="text-slate-300 text-[7px] sm:text-[9px] px-2 py-0.5">
                  주차장별 예측
                </div>
                <div className="text-slate-300 text-[7px] sm:text-[9px] px-2 py-0.5">
                  주차 안내
                </div>
                <div className="text-slate-300 text-[7px] sm:text-[9px] px-2 py-0.5 hidden sm:block">
                  공연 일정
                </div>
              </div>
            </div>
            <div className="text-[6px] text-slate-400 border-t border-white/10 pt-1.5 leading-tight hidden sm:block">
              올팍주차:88 parking
              <br />
              OLYMPIC PARK · SEOUL
            </div>
          </div>

          <div className="flex-1 p-3 sm:p-5 flex flex-col justify-between bg-[#F6F7FB]">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-[7px] sm:text-[8px] font-bold tracking-widest text-[#B48A3E]">
                  OLYMPIC PARK · PARKING GUIDE
                </div>
                <div className="text-xs sm:text-lg font-extrabold text-[#1E293B] leading-tight mt-0.5">
                  올림픽공원 주차,
                  <br />
                  출발 전에 확인하세요.
                </div>
              </div>
              <div className="hidden sm:block bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-[9px] font-bold text-slate-600 shadow-xs">
                NOV 09, 2026
              </div>
            </div>

            <div className="mt-2 rounded-xl overflow-hidden flex flex-1 min-h-[100px] shadow-sm border border-slate-200/80">
              <div className="w-[62%] bg-[#344666] text-white p-2.5 sm:p-4 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-[#C9A34E] text-[#1E293B] font-extrabold text-[6px] sm:text-[7px] px-1.5 py-0.5 rounded">
                    PARKING GUIDE · 88
                  </span>
                  <div className="text-[10px] sm:text-sm font-extrabold leading-snug mt-1.5">
                    주차 걱정은 줄이고,
                    <br />
                    올림픽공원은 더 즐겁게.
                  </div>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-md px-2 py-1 text-[7px] sm:text-[8px] flex items-center gap-1.5 mt-1.5">
                  <span className="bg-[#D4B46A] text-[#1E293B] font-bold px-1 rounded text-[6px]">
                    주차 현황
                  </span>
                  <span className="truncate text-slate-100">
                    공식 API 1,502대 · 비율 68.3%
                  </span>
                </div>
              </div>

              <div className="w-[38%] bg-[#D4BC82] relative overflow-hidden flex items-center justify-center">
                <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-28 sm:h-28 rounded-full border-[8px] sm:border-[12px] border-[#2B3A55]" />
                <div className="absolute -top-6 -right-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full border-[7px] sm:border-[10px] border-[#F5EEDB]/70" />
                <span className="absolute top-2 right-2.5 text-[#2B3A55] font-black text-xs sm:text-lg">
                  88
                </span>
                <div className="relative z-10 w-8 h-8 sm:w-11 sm:h-11 rounded-lg bg-[#F8F3E6] border-2 border-[#2B3A55] -rotate-12 flex items-center justify-center shadow">
                  <span className="text-[#2B3A55] font-black text-sm sm:text-lg">P</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // ② 올팍주차: 88 parking - 주차장별 혼잡도 비교하기 (두 번째 첨부 이미지)
    case "real-parking-zones":
      return (
        <div className="w-full h-full bg-[#F6F8FC] text-[#1E293B] p-3 sm:p-4 flex flex-col justify-between select-none overflow-hidden text-left font-sans">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className="inline-block bg-[#2B3A55] text-white font-bold text-[9px] sm:text-xs px-2.5 py-1 rounded-md shadow-xs">
                주차장별 혼잡도 비교하기
              </span>
              <span className="text-[7px] sm:text-[9px] text-slate-500 font-medium">
                2026-11-09 18:00 · 추천 구역 P5, P4
              </span>
            </div>
            <div className="mt-1.5 bg-[#EEF4FF] border border-[#D8E5FF] rounded px-2 py-1 text-[7px] sm:text-[8px] text-slate-600 truncate">
              목적지 접근성과 추정 혼잡 지수를 함께 고려한 추천 구역 P5, P4 (빈자리 보장 아님)
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 my-1.5 flex-1">
            <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-2.5 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="font-extrabold text-[9px] sm:text-[11px] text-[#1E293B]">
                  P1 · K-아트홀 인근
                </div>
                <div className="text-[7px] sm:text-[8px] text-slate-400">
                  공식 주차 규모 562대 · K-아트홀
                </div>
              </div>
              <div>
                <div className="text-[7px] sm:text-[9px] font-bold text-slate-700 mb-1">
                  여유 · 구역별 예상 혼잡 지수 42.5/100
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[42.5%] h-full bg-[#9BB1D0] rounded-full" />
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-2 sm:p-2.5 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="font-extrabold text-[9px] sm:text-[11px] text-[#1E293B]">
                  P2 · 올림픽홀·지하 주차장
                </div>
                <div className="text-[7px] sm:text-[8px] text-slate-400">
                  공식 주차 규모 320대 · 올림픽홀
                </div>
              </div>
              <div>
                <div className="text-[7px] sm:text-[9px] font-bold text-slate-700 mb-1">
                  여유 · 구역별 예상 혼잡 지수 45.6/100
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[45.6%] h-full bg-[#9BB1D0] rounded-full" />
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#C9A34E] rounded-lg p-2 sm:p-2.5 flex flex-col justify-between shadow-xs">
              <div className="flex items-start justify-between gap-1">
                <div>
                  <div className="font-extrabold text-[9px] sm:text-[11px] text-[#1E293B]">
                    P4 · 올림픽수영장 인근
                  </div>
                  <div className="text-[7px] sm:text-[8px] text-slate-400">
                    규모 117대 · 올림픽수영장
                  </div>
                </div>
                <span className="bg-[#2B3A55] text-white text-[6px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded shrink-0">
                  ★ 추천 후보
                </span>
              </div>
              <div>
                <div className="text-[7px] sm:text-[9px] font-bold text-slate-700 mb-1">
                  다소혼잡 · 예상 혼잡 지수 51.7/100
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[51.7%] h-full bg-[#7C9A6D] rounded-full" />
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-[#C9A34E] rounded-lg p-2 sm:p-2.5 flex flex-col justify-between shadow-xs">
              <div className="flex items-start justify-between gap-1">
                <div>
                  <div className="font-extrabold text-[9px] sm:text-[11px] text-[#1E293B]">
                    P5 · KSPO DOME 인근
                  </div>
                  <div className="text-[7px] sm:text-[8px] text-slate-400">
                    규모 176대 · KSPO DOME
                  </div>
                </div>
                <span className="bg-[#2B3A55] text-white text-[6px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded shrink-0">
                  ★ 추천 후보
                </span>
              </div>
              <div>
                <div className="text-[7px] sm:text-[9px] font-bold text-slate-700 mb-1">
                  여유 · 예상 혼잡 지수 44.1/100
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[44.1%] h-full bg-[#9BB1D0] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[7px] sm:text-[8px] text-slate-500">
            <div className="bg-white border border-slate-200 rounded px-2 py-1 truncate">
              <strong className="text-slate-700">P6 · 티켓링크 라이브 아레나</strong> · 45.4/100
            </div>
            <div className="bg-white border border-slate-200 rounded px-2 py-1 truncate">
              <strong className="text-slate-700">P7 · 우리금융아트홀 인근</strong> · 49.9/100
            </div>
          </div>
        </div>
      );

    // ③ 올팍주차: 88 parking - AI 주차 혼잡도 예측 (세 번째 첨부 이미지)
    case "real-parking-forecast": {
      const hours = [
        { h: "09", top: "24%", height: "42%" },
        { h: "10", top: "22%", height: "45%" },
        { h: "11", top: "24%", height: "43%" },
        { h: "12", top: "32%", height: "28%" },
        { h: "13", top: "34%", height: "25%" },
        { h: "14", top: "34%", height: "25%" },
        { h: "15", top: "33%", height: "27%" },
        { h: "16", top: "32%", height: "28%" },
        { h: "17", top: "18%", height: "54%" },
        { h: "18", top: "18%", height: "54%" },
        { h: "19", top: "18%", height: "54%" },
        { h: "20", top: "18%", height: "54%" },
      ];
      return (
        <div className="w-full h-full flex bg-[#F4F6FA] text-[#1E293B] select-none overflow-hidden text-left font-sans">
          <div className="w-[24%] bg-[#2B3A55] text-white p-2.5 sm:p-3.5 flex flex-col justify-between shrink-0">
            <div>
              <div className="font-extrabold text-[11px] sm:text-sm tracking-tight leading-none">
                올팍주차:<span className="text-[#E2B857]">88</span>
              </div>
              <div className="text-[8px] sm:text-[10px] text-slate-300 font-semibold mt-0.5">
                parking
              </div>
              <div className="space-y-1 mt-3">
                <div className="text-slate-300 text-[7px] sm:text-[9px] px-2 py-0.5">
                  한눈에 보기
                </div>
                <div className="bg-white text-[#1E293B] font-bold text-[8px] sm:text-[10px] px-2 py-1 rounded shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-xs bg-[#2B3A55]" />
                  AI 혼잡도 예측
                </div>
                <div className="text-slate-300 text-[7px] sm:text-[9px] px-2 py-0.5">
                  주차장별 예측
                </div>
                <div className="text-slate-300 text-[7px] sm:text-[9px] px-2 py-0.5">
                  주차 안내
                </div>
              </div>
            </div>
            <div className="text-[6px] text-slate-400 border-t border-white/10 pt-1.5 hidden sm:block">
              OLYMPIC PARK · SEOUL
            </div>
          </div>

          <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between bg-[#F8FAFC]">
            <div>
              <div className="text-[6px] sm:text-[8px] font-bold text-[#B48A3E]">
                올팍주차:88 parking / EXPLORE
              </div>
              <div className="text-xs sm:text-base font-extrabold text-[#1E293B]">
                AI 주차 혼잡도 예측
              </div>
              <div className="text-[7px] sm:text-[9px] text-slate-500 truncate">
                시뮬레이션 데이터로 학습한 모델을 통해 시간대별 혼잡 등급을 확인할 수 있습니다.
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 flex-1 mt-1.5 flex flex-col justify-between shadow-2xs">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[9px] sm:text-xs font-extrabold text-[#1E293B]">
                    날짜별 혼잡도 예측
                  </div>
                  <div className="text-[6px] sm:text-[8px] text-slate-400">
                    공연 일정과 날씨를 반영해 09~20시 주차 혼잡을 예상합니다.
                  </div>
                </div>
                <span className="border border-slate-200 rounded px-2 py-0.5 text-[7px] sm:text-[9px] font-bold text-slate-700 bg-slate-50">
                  2026-11-09
                </span>
              </div>

              <div className="grid grid-cols-12 gap-1 sm:gap-2 items-end h-20 sm:h-28 pt-2 border-b border-slate-100">
                {hours.map((item) => (
                  <div key={item.h} className="h-full relative flex flex-col items-center">
                    <div
                      className="w-full max-w-[16px] bg-[#B8C7DC] rounded-xs absolute"
                      style={{ top: item.top, height: item.height }}
                    />
                    <span className="text-[6px] sm:text-[8px] text-slate-400 font-mono mt-auto pb-0.5">
                      {item.h}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-[6px] sm:text-[8px] text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <i className="w-1.5 h-1.5 rounded-xs bg-[#B8C7DC] inline-block" />
                  여유 &lt;50%
                </span>
                <span className="flex items-center gap-1">
                  <i className="w-1.5 h-1.5 rounded-xs bg-[#65A30D] inline-block" />
                  다소혼잡 50~69%
                </span>
                <span className="flex items-center gap-1">
                  <i className="w-1.5 h-1.5 rounded-xs bg-[#D97706] inline-block" />
                  혼잡 70~89%
                </span>
                <span className="flex items-center gap-1 hidden sm:flex">
                  <i className="w-1.5 h-1.5 rounded-xs bg-[#DC2626] inline-block" />
                  만차 ≥90%
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // ④ Zaemit 웹사이트 만들기 (K-RECORD) - 첫 번째 첨부 이미지 (메인 히어로)
    case "real-zaemit-hero":
      return (
        <div className="w-full h-full flex flex-col bg-[#0F172A] text-white select-none overflow-hidden text-left font-sans">
          <div className="bg-white text-[#0F172A] px-3 sm:px-5 py-1.5 sm:py-2 flex items-center gap-4 sm:gap-6 border-b border-slate-200 shrink-0">
            <span className="font-black text-[10px] sm:text-xs tracking-tight text-[#0F172A]">
              K-RECORD
            </span>
            <div className="flex items-center gap-2.5 sm:gap-4 text-[7px] sm:text-[9px] font-semibold text-slate-600">
              <span className="text-[#0F172A] font-bold">홈</span>
              <span>순위 예측</span>
              <span>팀별 분석</span>
              <span>예측방식</span>
              <span>승부예측</span>
            </div>
          </div>

          <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-[#1B3B36] via-[#1A2F42] to-[#0E1E2B] p-4 sm:p-7 flex flex-col justify-center">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 28px, transparent 28px, transparent 56px)",
              }}
            />
            <div className="absolute right-4 sm:right-10 bottom-0 top-2 w-36 sm:w-52 pointer-events-none opacity-85">
              <svg viewBox="0 0 180 160" className="w-full h-full" fill="none">
                <circle cx="110" cy="120" r="68" fill="#10B981" opacity="0.16" />
                <path
                  d="M72 74C82 60 106 58 122 72L144 96L128 110L114 96V134H76V96L54 78L64 66L72 74Z"
                  fill="#0D6E5B"
                  stroke="#34D399"
                  strokeWidth="1.5"
                />
                <circle cx="96" cy="46" r="13" fill="#E2B49A" />
                <path d="M84 42C86 32 104 31 108 42C102 38 90 38 84 42Z" fill="#0F172A" />
                <circle cx="76" cy="144" r="11" fill="#F8FAFC" stroke="#0F172A" strokeWidth="1.5" />
                <polygon points="76,138 81,142 79,148 73,148 71,142" fill="#0F172A" />
              </svg>
            </div>

            <div className="relative z-10 max-w-[78%]">
              <div className="text-[7px] sm:text-[9px] font-bold tracking-widest text-[#60A5FA] uppercase">
                K LEAGUE · K-RECORD
              </div>
              <div className="text-sm sm:text-2xl font-black text-white leading-tight mt-1 tracking-tight">
                다음 기록까지,
                <br />몇 경기 남았나
              </div>
              <p className="text-[7px] sm:text-[10px] text-slate-200/90 mt-1.5 leading-relaxed line-clamp-2">
                현재 순위와 남은 일정, 최근 경기 흐름을 바탕으로 K리그 최종 순위 가능성을 데이터로 확인합니다.
              </p>
              <div className="flex items-center gap-2 mt-2.5 sm:mt-4">
                <span className="bg-white text-[#0F172A] font-bold text-[7px] sm:text-[9px] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow">
                  순위 예측 바로 보기
                </span>
                <span className="bg-white/15 border border-white/40 text-white font-semibold text-[7px] sm:text-[9px] px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
                  승부 예측 보기
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    // ⑤ Zaemit 웹사이트 만들기 (K-RECORD) - 두 번째 첨부 이미지 (K리그 순위 & 예상 순위 테이블)
    case "real-zaemit-table":
    default: {
      const standings = [
        { rank: "1위", team: "FC서울", color: "#DC2626", pts: "67점", pred: "1위" },
        { rank: "2위", team: "울산 HD FC", color: "#2563EB", pts: "57점", pred: "2위" },
        { rank: "3위", team: "대전하나시티즌", color: "#7C3AED", pts: "53점", pred: "3위" },
        { rank: "4위", team: "강원FC", color: "#EA580C", pts: "51점", pred: "4위" },
        { rank: "5위", team: "전북현대모터스", color: "#16A34A", pts: "49점", pred: "7위" },
        { rank: "6위", team: "인천유나이티드", color: "#1D4ED8", pts: "49점", pred: "5위" },
        { rank: "7위", team: "제주SK FC", color: "#F97316", pts: "48점", pred: "7위" },
        { rank: "8위", team: "FC안양", color: "#6D28D9", pts: "46점", pred: "8위" },
        { rank: "9위", team: "포항스틸러스", color: "#B91C1C", pts: "44점", pred: "9위" },
        { rank: "10위", team: "김천상무", color: "#991B1B", pts: "38점", pred: "10위" },
        { rank: "11위", team: "부천FC1995", color: "#E11D48", pts: "33점", pred: "11위" },
        { rank: "12위", team: "광주FC", color: "#CA8A04", pts: "23점", pred: "12위" },
      ];
      return (
        <div className="w-full h-full flex flex-col bg-[#0B1736] text-white select-none overflow-hidden text-left font-sans">
          <div className="bg-white text-[#0F172A] px-3 sm:px-5 py-1 sm:py-1.5 flex items-center gap-4 border-b border-slate-200 shrink-0">
            <span className="font-black text-[9px] sm:text-xs tracking-tight">K-RECORD</span>
            <div className="flex items-center gap-2.5 text-[7px] sm:text-[8px] font-semibold text-slate-600">
              <span>홈</span>
              <span className="text-[#0F172A] font-bold">순위 예측</span>
              <span>팀별 분석</span>
              <span>예측방식</span>
              <span>승부예측</span>
            </div>
          </div>

          <div className="flex-1 p-2 sm:p-3.5 flex flex-col justify-center">
            <div className="rounded-lg border border-white/15 bg-[#112047] overflow-hidden flex-1 flex flex-col">
              <div className="grid grid-cols-12 px-2.5 py-1 bg-[#182B59] text-[6px] sm:text-[8px] font-bold text-slate-300 border-b border-white/10">
                <span className="col-span-2">순위</span>
                <span className="col-span-6">구단</span>
                <span className="col-span-2 text-right">승점</span>
                <span className="col-span-2 text-right">예상 순위</span>
              </div>

              <div className="divide-y divide-white/5 flex-1 flex flex-col justify-between">
                {standings.map((row) => (
                  <div
                    key={row.rank}
                    className="grid grid-cols-12 items-center px-2.5 py-[1.5px] sm:py-[2px] text-[6.5px] sm:text-[8.5px]"
                  >
                    <span className="col-span-2 text-slate-300 font-semibold">{row.rank}</span>
                    <span className="col-span-6 font-bold text-white flex items-center gap-1.5 truncate">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: row.color }}
                      />
                      <span className="truncate">{row.team}</span>
                    </span>
                    <span className="col-span-2 text-right text-slate-200 font-medium">
                      {row.pts}
                    </span>
                    <span className="col-span-2 text-right font-bold text-[#93C5FD]">
                      {row.pred}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

// Awards & Certifications 픽셀 아이콘
const AwardPixelIcon = ({ type }) => {
  switch (type) {
    case "trophy-silver":
      return (
        <svg viewBox="0 0 24 24" className="w-9 h-9" shapeRendering="crispEdges">
          <rect x="6" y="3" width="12" height="9" fill="#E2E8F0" />
          <rect x="3" y="5" width="3" height="5" fill="#94A3B8" />
          <rect x="18" y="5" width="3" height="5" fill="#94A3B8" />
          <rect x="8" y="5" width="3" height="6" fill="#FFFFFF" />
          <rect x="10" y="12" width="4" height="5" fill="#CBD5E1" />
          <rect x="7" y="17" width="10" height="4" fill="#475569" />
        </svg>
      );
    case "trophy-special":
      return (
        <svg viewBox="0 0 24 24" className="w-9 h-9" shapeRendering="crispEdges">
          <rect x="6" y="3" width="12" height="9" fill="#FACC15" />
          <rect x="3" y="5" width="3" height="5" fill="#EAB308" />
          <rect x="18" y="5" width="3" height="5" fill="#EAB308" />
          <rect x="8" y="5" width="3" height="6" fill="#FEF08A" />
          <rect x="10" y="12" width="4" height="5" fill="#F59E0B" />
          <rect x="7" y="17" width="10" height="4" fill="#92400E" />
        </svg>
      );
    case "medal-design":
      return (
        <svg viewBox="0 0 24 24" className="w-9 h-9" shapeRendering="crispEdges">
          <rect x="7" y="2" width="4" height="7" fill="#4D7CFE" />
          <rect x="13" y="2" width="4" height="7" fill="#A78BFA" />
          <rect x="6" y="9" width="12" height="12" fill="#38BDF8" />
          <rect x="8" y="11" width="8" height="8" fill="#E0F2FE" />
          <rect x="11" y="13" width="2" height="4" fill="#0284C7" />
        </svg>
      );
    case "badge-volunteer":
      return (
        <svg viewBox="0 0 24 24" className="w-9 h-9" shapeRendering="crispEdges">
          <rect x="5" y="4" width="14" height="14" fill="#F43F5E" />
          <rect x="7" y="6" width="10" height="10" fill="#FDA4AF" />
          <rect x="9" y="9" width="2" height="2" fill="#BE123C" />
          <rect x="13" y="9" width="2" height="2" fill="#BE123C" />
          <rect x="9" y="11" width="6" height="2" fill="#BE123C" />
          <rect x="11" y="13" width="2" height="2" fill="#BE123C" />
          <rect x="8" y="18" width="3" height="4" fill="#E11D48" />
          <rect x="13" y="18" width="3" height="4" fill="#E11D48" />
        </svg>
      );
    case "chip":
      return (
        <svg viewBox="0 0 24 24" className="w-9 h-9" shapeRendering="crispEdges">
          <rect x="6" y="6" width="12" height="12" fill="#4D7CFE" />
          <rect x="8" y="8" width="8" height="8" fill="#1E293B" />
          <rect x="10" y="10" width="4" height="4" fill="#81D4FF" />
          <rect x="4" y="8" width="2" height="2" fill="#94A3B8" />
          <rect x="4" y="14" width="2" height="2" fill="#94A3B8" />
          <rect x="18" y="8" width="2" height="2" fill="#94A3B8" />
          <rect x="18" y="14" width="2" height="2" fill="#94A3B8" />
        </svg>
      );
    case "scroll":
      return (
        <svg viewBox="0 0 24 24" className="w-9 h-9" shapeRendering="crispEdges">
          <rect x="5" y="4" width="14" height="16" fill="#FDE68A" />
          <rect x="4" y="4" width="16" height="3" fill="#D97706" />
          <rect x="4" y="17" width="16" height="3" fill="#D97706" />
          <rect x="8" y="9" width="8" height="2" fill="#92400E" />
          <rect x="8" y="13" width="6" height="2" fill="#92400E" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-9 h-9" shapeRendering="crispEdges">
          <rect x="6" y="4" width="12" height="16" fill="#38BDF8" />
          <rect x="8" y="6" width="8" height="12" fill="#0F172A" />
          <rect x="9" y="8" width="3" height="4" fill="#34D399" />
          <rect x="12" y="11" width="3" height="4" fill="#34D399" />
        </svg>
      );
  }
};

/**
 * ============================================================================
 * 3. INITIAL RETRO LOADING SCREEN (최초 2초 웨이브 로딩 화면)
 * ============================================================================
 */
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  const letters = ["L", "O", "A", "D", "I", "N", "G", ".", ".", "."];
  const totalSegments = 10;

  useEffect(() => {
    const start = Date.now();
    const duration = 2000;

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(timer);
        setFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 450);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  const filledSegments = Math.round((progress / 100) * totalSegments);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#080D1E] retro-grid-bg overflow-hidden transition-opacity duration-500 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-label="포트폴리오 로딩 중"
    >
      {/* 상단 별과 픽셀 구름 */}
      <div className="relative w-full h-1/3 pointer-events-none">
        <span className="absolute top-12 left-[14%] w-1 h-1 bg-white/80 animate-pulse" />
        <span className="absolute top-20 left-[38%] w-1.5 h-1.5 bg-[#81D4FF] animate-pulse" />
        <span className="absolute top-10 right-[25%] w-1 h-1 bg-white/70" />
        <span className="absolute top-28 right-[14%] w-1.5 h-1.5 bg-[#A78BFA] animate-pulse" />
        <PixelCloud className="absolute top-14 -left-4 w-32 sm:w-44 opacity-90" variant="blue" />
        <PixelCloud className="absolute top-8 right-6 w-28 sm:w-36 opacity-80" variant="dark" />
        <PixelCloud className="absolute top-36 left-[12%] w-24 opacity-70" variant="dark" />
      </div>

      {/* 중앙 LOADING... 웨이브 애니메이션 & 픽셀 분할 진행 바 */}
      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="flex items-center justify-center mb-3">
          <span className="w-1 h-3 bg-[#81D4FF] rotate-[-25deg] mx-1.5 opacity-80" />
          <span className="w-1 h-4 bg-[#81D4FF] mx-1.5 opacity-90" />
          <span className="w-1 h-3 bg-[#81D4FF] rotate-[25deg] mx-1.5 opacity-80" />
        </div>

        <h1
          className="font-pixel text-2xl sm:text-4xl md:text-5xl tracking-wider text-white flex items-center select-none drop-shadow-[0_4px_0_#1D4ED8]"
          aria-label="LOADING..."
        >
          {letters.map((char, idx) => (
            <span
              key={idx}
              className="inline-block animate-pixel-wave"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="mt-8 p-1.5 rounded-lg border-2 border-[#E2E8F0] bg-[#0B1228] shadow-[0_0_20px_rgba(77,124,254,0.35)]">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalSegments }).map((_, idx) => {
              const active = idx < filledSegments;
              return (
                <div
                  key={idx}
                  className={`w-4 sm:w-6 h-3.5 sm:h-4 rounded-[2px] transition-colors duration-150 ${
                    active
                      ? "bg-gradient-to-b from-[#7DD3FC] to-[#3B82F6] shadow-[0_0_8px_#60A5FA]"
                      : "bg-[#172242]"
                  }`}
                />
              );
            })}
          </div>
        </div>

        <p className="mt-4 font-display text-xs sm:text-sm tracking-[0.28em] text-[#CBD5E1] uppercase">
          INITIALIZING PORTFOLIO...
        </p>
      </div>

      {/* 하단 도시 실루엣 & 걸어가는 픽셀 캐릭터와 고양이 */}
      <div className="relative w-full h-40 sm:h-48 flex items-end overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1200 180"
          preserveAspectRatio="none"
          className="w-full h-full"
          shapeRendering="crispEdges"
        >
          <rect x="0" y="95" width="75" height="75" fill="#131C38" />
          <rect x="18" y="110" width="8" height="10" fill="#3B82F6" opacity="0.6" />
          <rect x="42" y="110" width="8" height="10" fill="#60A5FA" opacity="0.5" />
          <rect x="18" y="130" width="8" height="10" fill="#3B82F6" opacity="0.4" />
          <rect x="85" y="115" width="95" height="55" fill="#0F172E" />
          <rect x="190" y="80" width="70" height="90" fill="#162142" />
          <rect x="208" y="98" width="10" height="10" fill="#60A5FA" opacity="0.5" />
          <rect x="232" y="98" width="10" height="10" fill="#60A5FA" opacity="0.5" />
          <rect x="275" y="122" width="160" height="48" fill="#111933" />
          <rect x="740" y="110" width="130" height="60" fill="#121B36" />
          <rect x="890" y="85" width="85" height="85" fill="#172347" />
          <rect x="908" y="102" width="10" height="10" fill="#93C5FD" opacity="0.6" />
          <rect x="935" y="102" width="10" height="10" fill="#93C5FD" opacity="0.6" />
          <rect x="1032" y="14" width="4" height="32" fill="#64748B" />
          <rect x="1022" y="46" width="24" height="10" fill="#475569" />
          <rect x="1016" y="56" width="36" height="12" fill="#334155" />
          <rect x="1020" y="59" width="28" height="4" fill="#81D4FF" />
          <rect x="1026" y="68" width="16" height="102" fill="#1E293B" />
          <rect x="1085" y="92" width="115" height="78" fill="#131C38" />
          <rect x="1105" y="108" width="10" height="10" fill="#60A5FA" opacity="0.5" />
          <rect x="1135" y="108" width="10" height="10" fill="#60A5FA" opacity="0.5" />

          <rect x="0" y="164" width="1200" height="6" fill="#22C55E" />
          <rect x="0" y="170" width="1200" height="10" fill="#15803D" />
        </svg>

        <div className="absolute bottom-3 left-0 animate-walk-across flex items-end gap-3">
          <svg viewBox="0 0 24 20" className="w-9 h-8 animate-bounce" shapeRendering="crispEdges">
            <rect x="2" y="6" width="3" height="6" fill="#F8FAFC" />
            <rect x="5" y="10" width="12" height="6" fill="#FFFFFF" />
            <rect x="13" y="4" width="8" height="7" fill="#FFFFFF" />
            <rect x="13" y="2" width="2" height="2" fill="#FFFFFF" />
            <rect x="19" y="2" width="2" height="2" fill="#FFFFFF" />
            <rect x="18" y="6" width="2" height="2" fill="#0F172A" />
            <rect x="6" y="16" width="2" height="3" fill="#CBD5E1" />
            <rect x="14" y="16" width="2" height="3" fill="#CBD5E1" />
          </svg>

          <svg viewBox="0 0 32 36" className="w-12 h-14 animate-walk-bob" shapeRendering="crispEdges">
            <rect x="6" y="15" width="5" height="11" fill="#2563EB" />
            <rect x="10" y="3" width="13" height="5" fill="#0F172A" />
            <rect x="8" y="6" width="17" height="7" fill="#1E293B" />
            <rect x="11" y="12" width="12" height="8" fill="#FDE6D8" />
            <rect x="19" y="14" width="2" height="3" fill="#0F172A" />
            <rect x="11" y="20" width="12" height="9" fill="#FFFFFF" />
            <rect x="11" y="20" width="12" height="3" fill="#3B82F6" />
            <rect x="12" y="29" width="4" height="5" fill="#1E293B" />
            <rect x="18" y="29" width="4" height="5" fill="#0F172A" />
          </svg>
        </div>
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * 4. NAVIGATION BAR (상단 내비게이션)
 * ============================================================================
 */
const Navbar = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "research", label: "Research" },
    { id: "awards", label: "Awards" },
    { id: "activities", label: "Activities" },
    { id: "contact", label: "Contact" },
  ];

  const handleSelect = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090E20]/85 backdrop-blur-md border-b border-[#1E2B4D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => handleSelect("home")}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <PixelAvatarMini />
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-[#81D4FF] transition-colors">
            {PROFILE_DATA.brand}
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1.5" aria-label="주 메뉴">
          {navItems.map((item) => {
            const isActive =
              activePage === item.id ||
              (activePage === "project-detail" && item.id === "projects") ||
              (activePage === "skills" && item.id === "about");
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#132247] text-[#81D4FF] border border-[#4D7CFE] shadow-[0_0_15px_rgba(77,124,254,0.45)]"
                    : "text-[#94A3B8] hover:text-white hover:bg-[#131C35]/70 border border-transparent"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="모바일 메뉴 열기"
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 rounded-lg bg-[#131C35] border border-[#283863] text-[#F1F5F9] hover:border-[#4D7CFE]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D142B] border-b border-[#24335C] px-4 py-3 space-y-1.5">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#16264F] text-[#81D4FF] border border-[#4D7CFE]"
                    : "text-[#94A3B8] hover:text-white hover:bg-[#131C35]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

/**
 * ============================================================================
 * 5. PAGE VIEWS (각 메뉴별 페이지 컴포넌트)
 * ============================================================================
 */

// 5-1. HOME VIEW (메인 히어로 + STATUS 카드 + Bento Grid 6종 + 수상 하이라이트 + Featured Project)
const HomeView = ({ onNavigate, onSelectProject, onTriggerFireworks }) => {
  const bentoItems = [
    {
      id: "about",
      title: "About Me",
      subtitle: "나를 소개합니다",
      icon: "about",
    },
    {
      id: "projects",
      title: "Projects",
      subtitle: "개발 프로젝트",
      icon: "projects",
    },
    {
      id: "research",
      title: "Research",
      subtitle: "연구 및 논문",
      icon: "research",
    },
    {
      id: "awards",
      title: "Awards",
      subtitle: "수상 및 성과",
      icon: "awards",
    },
    {
      id: "activities",
      title: "Activities",
      subtitle: "대외활동 및 경험",
      icon: "activities",
    },
    {
      id: "skills",
      title: "Skills",
      subtitle: "기술 스택",
      icon: "skills",
    },
  ];

  const featuredProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <div className="space-y-10 pb-12">
      {/* 상단 히어로 & STATUS 섹션 */}
      <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-2">
            <p className="font-display font-bold text-lg sm:text-xl text-[#E2E8F0] tracking-tight">
              {PROFILE_DATA.heroGreeting}
            </p>
            <h1 className="font-pixel text-3xl sm:text-4xl xl:text-[42px] leading-tight text-white drop-shadow-[0_3px_0_#2563EB]">
              {PROFILE_DATA.heroName}
            </h1>
          </div>

          <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed whitespace-pre-line">
            {PROFILE_DATA.heroSubtitle}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {PROFILE_DATA.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#131C35]/90 text-[#CBD5E1] border border-[#3B5BDB]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-[#81D4FF] hover:text-white transition-colors"
              >
                # {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 중앙 오리지널 치비 일러스트 캐릭터 */}
        <div className="lg:col-span-4 flex justify-center">
          <HeroPixelCharacter
            onCharacterClick={(unlocked) => {
              if (unlocked) onTriggerFireworks();
            }}
          />
        </div>

        {/* 우측 STATUS 카드 */}
        <div className="lg:col-span-3">
          <div className="bento-card p-5 relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[#2A3C6E]">
              <span className="font-display font-bold text-xs tracking-widest text-[#E2E8F0] uppercase">
                STATUS
              </span>
              <div className="flex items-center gap-1" aria-label="체력 하트 3개">
                <PixelHeart filled />
                <PixelHeart filled />
                <PixelHeart filled />
              </div>
            </div>

            <dl className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between gap-2">
                <dt className="text-[#94A3B8]">학교</dt>
                <dd className="font-semibold text-[#F1F5F9]">{PROFILE_DATA.status.school}</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-[#94A3B8]">학년</dt>
                <dd className="font-semibold text-[#F1F5F9]">{PROFILE_DATA.status.grade}</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-[#94A3B8]">학점</dt>
                <dd className="font-semibold text-[#81D4FF]">{PROFILE_DATA.status.gpa}</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-[#94A3B8]">주전공</dt>
                <dd className="font-semibold text-[#F1F5F9]">{PROFILE_DATA.status.major}</dd>
              </div>
              <div className="flex items-center justify-between gap-2">
                <dt className="text-[#94A3B8]">복수전공</dt>
                <dd className="font-semibold text-[#A78BFA]">{PROFILE_DATA.status.doubleMajor}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 중단 Bento Grid 6개 메뉴 카드 */}
      <section aria-label="주요 메뉴 바로가기">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {bentoItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="bento-card bento-card-interactive group p-5 sm:p-6 flex items-center gap-4 text-left"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-[#0D152C] border border-[#283B6E] flex items-center justify-center group-hover:border-[#60A5FA] transition-colors">
                <BentoMenuIcon type={item.icon} />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-display font-bold text-lg text-white group-hover:text-[#81D4FF] transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-0.5 truncate">
                  {item.subtitle}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#4D7CFE] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </button>
          ))}
        </div>
      </section>

      {/* 수상 및 자격 성과 하이라이트 섹션 (첫 화면에서 수상 실적이 바로 드러나도록 구성) */}
      <section aria-label="수상 및 자격 성과 요약" className="space-y-4 pt-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h2 className="font-display font-bold text-lg sm:text-xl text-white">
              HONORS &amp; AWARDS
            </h2>
            <span className="hidden sm:inline-block text-xs px-2.5 py-0.5 rounded-full bg-[#162347] text-[#81D4FF] border border-[#3B5BDB]/50">
              수상 4건 · 자격/역량 3건
            </span>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("awards")}
            className="text-xs sm:text-sm font-medium text-[#81D4FF] hover:text-white flex items-center gap-1 transition-colors"
          >
            업적 상세 보기 <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {AWARDS_DATA.map((award) => (
            <button
              key={award.id}
              type="button"
              onClick={() => onNavigate("awards")}
              className="bento-card bento-card-interactive p-4 text-left flex flex-col justify-between gap-3 group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#0D152C] border border-[#2B3E75] flex items-center justify-center shrink-0">
                  <AwardPixelIcon type={award.iconType} />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-display font-semibold bg-amber-500/15 text-amber-300 border border-amber-400/30">
                  AWARD
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-white group-hover:text-[#81D4FF] transition-colors leading-snug">
                  {award.title}
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1">{award.issuer}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="bento-card px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-display font-semibold text-[#81D4FF]">
            <Award className="w-4 h-4" />
            <span>CERTIFICATIONS &amp; SW COMPETENCY</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {CERTIFICATIONS_DATA.map((cert) => (
              <button
                key={cert.id}
                type="button"
                onClick={() => onNavigate("awards")}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#0D152C] text-[#E2E8F0] border border-[#3B5BDB]/50 hover:border-[#81D4FF] hover:text-[#81D4FF] transition-colors"
              >
                {cert.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 하단 Featured Project 영역 (바로가기 사이트 링크 포함) */}
      <section aria-label="대표 프로젝트" className="space-y-4 pt-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-[#81D4FF]" />
            <h2 className="font-display font-bold text-lg sm:text-xl text-white">
              FEATURED PROJECTS
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate("projects")}
            className="text-xs sm:text-sm font-medium text-[#81D4FF] hover:text-white flex items-center gap-1 transition-colors"
          >
            전체 프로젝트 보기 <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card bento-card-interactive overflow-hidden flex flex-col justify-between group"
            >
              <div
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onSelectProject(project);
                }}
                className="cursor-pointer"
              >
                <div className="h-48 sm:h-52 w-full bg-[#0B1226] border-b border-[#253663] overflow-hidden">
                  <ProjectPixelArtwork
                    variant={project.images[0].variant}
                    imageUrl={project.images[0].imageUrl}
                    alt={project.title}
                  />
                </div>

                <div className="p-5 pb-3 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.category.map((cat) => (
                        <span
                          key={cat}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1D3166] text-[#81D4FF] border border-[#4D7CFE]/40"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    {project.awardBadge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/15 text-amber-300 border border-amber-400/40">
                        {project.awardBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#81D4FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-[#81D4FF] hover:text-white transition-colors"
                >
                  상세 내용 보기 →
                </button>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#4D7CFE]/20 text-[#81D4FF] border border-[#4D7CFE]/50 hover:bg-[#4D7CFE] hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    사이트 바로가기
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// 5-2. ABOUT ME VIEW
const AboutView = ({ onNavigate }) => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center gap-3">
        <BentoMenuIcon type="about" />
        <div>
          <span className="font-display text-xs tracking-widest text-[#81D4FF] uppercase">
            ABOUT ME
          </span>
          <h1 className="font-pixel text-2xl sm:text-3xl text-white mt-1">
            {PROFILE_DATA.about.title}
          </h1>
        </div>
      </div>

      <div className="bento-card p-6 sm:p-8 space-y-4">
        {PROFILE_DATA.about.paragraphs.map((text, index) => (
          <p
            key={index}
            className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed"
          >
            {text}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bento-card p-6 space-y-4">
          <div className="flex items-center gap-2.5 text-[#81D4FF]">
            <GraduationCap className="w-5 h-5" />
            <h2 className="font-display font-bold text-lg text-white">
              Education &amp; Academic Status
            </h2>
          </div>
          <div className="space-y-3 text-sm">
            <div className="p-3.5 rounded-xl bg-[#0D152C] border border-[#23335E] flex justify-between items-center">
              <span className="text-[#94A3B8]">소속 대학</span>
              <span className="font-semibold text-white">{PROFILE_DATA.status.school}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0D152C] border border-[#23335E] flex justify-between items-center">
              <span className="text-[#94A3B8]">재학 학년</span>
              <span className="font-semibold text-white">{PROFILE_DATA.status.grade}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0D152C] border border-[#23335E] flex justify-between items-center">
              <span className="text-[#94A3B8]">평점 (GPA)</span>
              <span className="font-semibold text-[#81D4FF]">{PROFILE_DATA.status.gpa}</span>
            </div>
          </div>
        </div>

        <div className="bento-card p-6 space-y-4">
          <div className="flex items-center gap-2.5 text-[#A78BFA]">
            <Layers className="w-5 h-5" />
            <h2 className="font-display font-bold text-lg text-white">
              Double Major Track
            </h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-[#0D152C] border border-[#2A3D73]">
              <span className="text-xs font-display text-[#81D4FF]">PRIMARY MAJOR</span>
              <p className="font-bold text-base text-white mt-0.5">
                {PROFILE_DATA.status.major}전공
              </p>
              <p className="text-xs text-[#94A3B8] mt-1">
                소프트웨어 공학, 데이터 처리, AI 시스템 및 백엔드 아키텍처 설계
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#0D152C] border border-[#3B2E73]">
              <span className="text-xs font-display text-[#A78BFA]">DOUBLE MAJOR</span>
              <p className="font-bold text-base text-white mt-0.5">
                {PROFILE_DATA.status.doubleMajor}전공
              </p>
              <p className="text-xs text-[#94A3B8] mt-1">
                인터랙티브 콘텐츠 구현, 게임 시스템 로직 및 사용자 몰입 경험 연구
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2.5">
          <Compass className="w-5 h-5 text-[#81D4FF]" />
          <h2 className="font-display font-bold text-lg text-white">Interests</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROFILE_DATA.about.interests.map((interest) => (
            <div key={interest.title} className="bento-card p-5 space-y-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1A2B59] text-[#81D4FF] border border-[#4D7CFE]/40">
                {interest.tag}
              </span>
              <h3 className="font-display font-bold text-base text-white">
                {interest.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {interest.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => onNavigate("skills")}
          className="px-5 py-2.5 rounded-xl bg-[#16254D] hover:bg-[#1E3266] text-[#81D4FF] border border-[#4D7CFE]/60 text-sm font-medium flex items-center gap-2 transition-colors"
        >
          기술 스택 트리 보러가기 <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// 5-3. PROJECTS LIST VIEW
const ProjectsView = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "AI / ML", "Web", "Research", "Game / Design"];

  const filteredProjects =
    selectedFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category.includes(selectedFilter));

  return (
    <div className="space-y-7 pb-12">
      <div className="flex items-center gap-3.5">
        <svg viewBox="0 0 40 28" className="w-12 h-9" shapeRendering="crispEdges">
          <rect x="6" y="4" width="28" height="16" fill="#93C5FD" />
          <rect x="3" y="8" width="34" height="14" fill="#60A5FA" />
          <rect x="3" y="20" width="8" height="5" fill="#3B82F6" />
          <rect x="29" y="20" width="8" height="5" fill="#3B82F6" />
          <rect x="9" y="11" width="2" height="6" fill="#1E293B" />
          <rect x="7" y="13" width="6" height="2" fill="#1E293B" />
          <rect x="27" y="11" width="2" height="2" fill="#1E293B" />
          <rect x="30" y="13" width="2" height="2" fill="#1E293B" />
          <rect x="24" y="13" width="2" height="2" fill="#1E293B" />
          <rect x="27" y="15" width="2" height="2" fill="#1E293B" />
        </svg>
        <div>
          <h1 className="font-pixel text-2xl sm:text-3xl text-white">Projects</h1>
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
            지금까지 진행한 주요 프로젝트입니다.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="프로젝트 카테고리 필터">
        {filters.map((filter) => {
          const active = selectedFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                active
                  ? "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-[0_0_16px_rgba(77,124,254,0.55)] border border-[#93C5FD]"
                  : "bg-[#131C35] text-[#CBD5E1] border border-[#2D3F73] hover:border-[#4D7CFE]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="bento-card p-10 text-center space-y-2">
          <p className="text-base font-medium text-[#E2E8F0]">
            해당 카테고리에 등록된 프로젝트가 준비 중입니다.
          </p>
          <p className="text-xs text-[#94A3B8]">
            Research 탭에서 진행 중인 캡스톤 연구 내용을 확인하실 수 있습니다.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bento-card bento-card-interactive overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div
                  onClick={() => onSelectProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") onSelectProject(project);
                  }}
                  className="h-52 sm:h-56 w-full bg-[#0A1022] border-b border-[#253663] overflow-hidden cursor-pointer"
                >
                  <ProjectPixelArtwork
                    variant={project.images[0].variant}
                    imageUrl={project.images[0].imageUrl}
                    alt={project.title}
                  />
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-xs font-semibold text-[#81D4FF]">
                      {project.number}
                    </span>
                    {project.awardBadge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/15 text-amber-300 border border-amber-400/40">
                        {project.awardBadge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-0.5 rounded-full text-xs font-medium bg-[#1C2F63] text-[#81D4FF] border border-[#4D7CFE]/40"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <h2
                    onClick={() => onSelectProject(project)}
                    className="font-display font-bold text-xl text-white group-hover:text-[#81D4FF] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-2 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] bg-[#0D152C] text-[#CBD5E1] border border-[#23335E]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-[#1E2C52] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-xs sm:text-sm font-semibold text-[#81D4FF] hover:text-white transition-colors"
                  >
                    프로젝트 상세 보기 →
                  </button>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#4D7CFE] hover:bg-[#3B6AF5] text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      바로 접속하기
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

// 5-4. PROJECT DETAIL VIEW (시안 우측 하단 화면 구조 재현 + 이미지 갤러리 슬라이더)
const ProjectDetailView = ({ project, onBack }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [];
  const activeImage = images[currentImgIndex] || images[0];

  const handlePrev = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-8 pb-14">
      <div className="border-b border-[#1E2B4D] pb-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-[#CBD5E1] hover:text-[#81D4FF] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          프로젝트 목록으로
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4">
          <div className="bento-card p-2 sm:p-3 overflow-hidden">
            <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A1022] border border-[#2B3E75]">
              <ProjectPixelArtwork
                variant={activeImage.variant}
                imageUrl={activeImage.imageUrl}
                alt={activeImage.caption}
              />
            </div>
            <p className="text-center text-xs text-[#94A3B8] mt-2.5 pb-1">
              {activeImage.caption}
            </p>
          </div>

          {images.length > 1 && (
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="이전 이미지"
                className="w-9 h-9 rounded-full bg-[#131C35] border border-[#344982] flex items-center justify-center text-[#CBD5E1] hover:text-white hover:border-[#81D4FF] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2.5 overflow-x-auto py-1">
                {images.map((img, idx) => {
                  const isSelected = idx === currentImgIndex;
                  return (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => setCurrentImgIndex(idx)}
                      aria-label={`이미지 ${idx + 1} 선택`}
                      className={`w-24 sm:w-28 h-14 sm:h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        isSelected
                          ? "border-[#81D4FF] shadow-[0_0_12px_rgba(129,212,255,0.5)] scale-105"
                          : "border-[#253663] opacity-65 hover:opacity-100"
                      }`}
                    >
                      <ProjectPixelArtwork
                        variant={img.variant}
                        imageUrl={img.imageUrl}
                        alt={img.caption}
                      />
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="다음 이미지"
                className="w-9 h-9 rounded-full bg-[#131C35] border border-[#344982] flex items-center justify-center text-[#CBD5E1] hover:text-white hover:border-[#81D4FF] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 space-y-5">
          <div className="space-y-3">
            <span className="font-display text-xs font-bold tracking-wider text-[#81D4FF]">
              {project.number}
            </span>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-white">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="px-3.5 py-1 rounded-full text-xs font-medium bg-[#182956] text-[#81D4FF] border border-[#4D7CFE]/50"
                >
                  {cat}
                </span>
              ))}
              {project.awardBadge && (
                <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-amber-500/15 text-amber-300 border border-amber-400/40">
                  {project.awardBadge}
                </span>
              )}
            </div>

            <p className="text-sm text-[#CBD5E1] leading-relaxed pt-1">
              {project.fullDesc}
            </p>
          </div>

          <div className="bento-card p-5 space-y-3.5 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-[#81D4FF] shrink-0 mt-0.5" />
              <span className="text-[#94A3B8] w-20 shrink-0">개발 기간</span>
              <span className="text-[#F1F5F9] font-medium">{project.period}</span>
            </div>
            <div className="flex items-start gap-3">
              <UserCheck className="w-4 h-4 text-[#81D4FF] shrink-0 mt-0.5" />
              <span className="text-[#94A3B8] w-20 shrink-0">역할</span>
              <span className="text-[#F1F5F9] font-medium">{project.role}</span>
            </div>
            <div className="flex items-start gap-3">
              <Wrench className="w-4 h-4 text-[#81D4FF] shrink-0 mt-0.5" />
              <span className="text-[#94A3B8] w-20 shrink-0">기술 스택</span>
              <span className="text-[#F1F5F9] font-medium leading-relaxed">
                {project.techStack.join(", ")}
              </span>
            </div>
          </div>

          {project.notice && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/35 text-xs text-amber-200 leading-relaxed">
              {project.notice}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:brightness-110 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(77,124,254,0.45)] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                서비스 체험하기
              </a>
            ) : (
              <div className="px-4 py-3 rounded-xl bg-[#131C35] border border-[#2B3E75] text-[#94A3B8] text-xs flex items-center justify-center">
                배포 링크 추후 등록 예정
              </div>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-[#131C35] hover:bg-[#1B284B] text-white border border-[#3B5BDB]/60 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub 보기
              </a>
            ) : (
              <div
                className="px-4 py-3 rounded-xl bg-[#131C35]/70 border border-[#2A3B6B] text-[#94A3B8] text-xs flex items-center justify-center gap-2"
                title="PROJECTS_DATA의 githubUrl 항목에서 주소를 입력할 수 있습니다."
              >
                <Github className="w-4 h-4" />
                GitHub 주소 추후 연결
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        <div className="bento-card p-6 space-y-2.5">
          <h2 className="font-display font-bold text-base text-[#81D4FF]">
            01. 개발 배경 및 목적
          </h2>
          <p className="text-sm text-[#CBD5E1] leading-relaxed">{project.background}</p>
        </div>

        <div className="bento-card p-6 space-y-2.5">
          <h2 className="font-display font-bold text-base text-[#81D4FF]">
            02. 핵심 기능
          </h2>
          <ul className="space-y-1.5 text-sm text-[#CBD5E1]">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4D7CFE] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bento-card p-6 space-y-2.5">
          <h2 className="font-display font-bold text-base text-[#A78BFA]">
            03. 문제 해결 과정
          </h2>
          <p className="text-sm text-[#CBD5E1] leading-relaxed">
            {project.troubleshooting}
          </p>
        </div>

        <div className="bento-card p-6 space-y-2.5">
          <h2 className="font-display font-bold text-base text-[#A78BFA]">
            04. 프로젝트를 통해 배운 점
          </h2>
          <p className="text-sm text-[#CBD5E1] leading-relaxed">{project.learnings}</p>
        </div>
      </div>
    </div>
  );
};

// 5-5. RESEARCH VIEW (캡스톤 연구 표기 + 다중 연구 확장 가능 구조 + 인터랙티브 시스템 다이어그램)
const ResearchView = () => {
  const [selectedResearchId, setSelectedResearchId] = useState(RESEARCH_LIST_DATA[0].id);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const currentResearch =
    RESEARCH_LIST_DATA.find((item) => item.id === selectedResearchId) ||
    RESEARCH_LIST_DATA[0];

  const handleSelectResearch = (id) => {
    setSelectedResearchId(id);
    setActiveStepIndex(0);
  };

  const stepIcons = [FileText, Search, Bot, ListTodo];
  const currentStep =
    currentResearch.pipelineSteps[activeStepIndex] || currentResearch.pipelineSteps[0];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <BentoMenuIcon type="research" />
          <div>
            <span className="font-display text-xs tracking-widest text-[#81D4FF] uppercase">
              CAPSTONE &amp; ACADEMIC RESEARCH
            </span>
            <h1 className="font-pixel text-2xl sm:text-3xl text-white mt-1">
              Research
            </h1>
          </div>
        </div>
        <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-display font-semibold bg-[#131C35] text-[#81D4FF] border border-[#3B5BDB]/50">
          총 {RESEARCH_LIST_DATA.length}건의 연구 아카이브
        </span>
      </div>

      {/* 연구가 여러 개로 늘어날 때 선택할 수 있는 연구 스위처 탭 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {RESEARCH_LIST_DATA.map((item, idx) => {
          const isSelected = item.id === currentResearch.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelectResearch(item.id)}
              className={`bento-card p-4 text-left transition-all ${
                isSelected
                  ? "border-[#81D4FF] bg-[#162347] shadow-[0_0_18px_rgba(77,124,254,0.3)]"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-display font-bold text-[#81D4FF]">
                  RESEARCH 0{idx + 1} · {item.badge}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#0D152C] text-[#A78BFA] border border-[#A78BFA]/30">
                  {item.status}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                {item.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* 선택된 연구 논문/캡스톤 상세 헤더 카드 */}
      <div className="bento-card p-6 sm:p-8 space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold bg-[#1B2D63] text-[#81D4FF] border border-[#4D7CFE]/50">
            {currentResearch.badge}
          </span>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#1E1B4B] text-[#C4B5FD] border border-[#8B5CF6]/40">
            {currentResearch.status}
          </span>
        </div>

        <h2 className="font-bold text-xl sm:text-2xl text-white leading-snug">
          {currentResearch.title}
        </h2>

        <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
          {currentResearch.summary}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {currentResearch.keywords.map((kw) => (
            <span
              key={kw}
              className="px-3 py-1 rounded-full text-xs font-medium bg-[#0D152C] text-[#A78BFA] border border-[#A78BFA]/40"
            >
              # {kw}
            </span>
          ))}
        </div>
      </div>

      {/* 연구 핵심 내용 3단 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {currentResearch.cards.map((card) => (
          <div key={card.title} className="bento-card p-6 space-y-2.5">
            <h3 className="font-display font-bold text-base text-[#81D4FF]">
              {card.title}
            </h3>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">{card.content}</p>
          </div>
        ))}
      </div>

      {/* 인터랙티브 시스템 작동 구조 다이어그램 */}
      <div className="bento-card p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Interactive System Architecture Diagram
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              각 파이프라인 단계를 클릭하면 시스템 내부 동작 방식을 확인할 수 있습니다.
            </p>
          </div>
          <span className="text-xs font-display text-[#81D4FF]">
            CLICK STEP TO INSPECT
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {currentResearch.pipelineSteps.map((node, idx) => {
            const IconComp = stepIcons[idx % stepIcons.length];
            const active = activeStepIndex === idx;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  active
                    ? "bg-[#1A2D63] border-[#81D4FF] shadow-[0_0_20px_rgba(77,124,254,0.4)]"
                    : "bg-[#0D152C] border-[#263766] hover:border-[#4D7CFE]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-[11px] font-bold text-[#81D4FF]">
                    {node.step}
                  </span>
                  <IconComp
                    className={`w-4 h-4 ${active ? "text-[#81D4FF]" : "text-[#94A3B8]"}`}
                  />
                </div>
                <p className="font-bold text-sm text-white">{node.title}</p>
                <p className="text-xs text-[#94A3B8] mt-1">{node.short}</p>
              </button>
            );
          })}
        </div>

        <div className="p-5 rounded-xl bg-[#0B1226] border border-[#2C4078] space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-display font-bold text-sm text-[#81D4FF]">
              {currentStep.step} — {currentStep.title}
            </span>
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#131C35] text-[#A78BFA] border border-[#3B2E73]">
              {currentStep.tech}
            </span>
          </div>
          <p className="text-sm text-[#E2E8F0] leading-relaxed">
            {currentStep.detail}
          </p>
        </div>
      </div>
    </div>
  );
};

// 5-6. AWARDS VIEW (레트로 업적 시스템 재해석 + 클릭 시 상세 모달/패널)
const AwardsView = () => {
  const [selectedItem, setSelectedItem] = useState(AWARDS_DATA[0]);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <BentoMenuIcon type="awards" />
          <div>
            <span className="font-display text-xs tracking-widest text-[#81D4FF] uppercase">
              ACHIEVEMENTS &amp; CREDENTIALS
            </span>
            <h1 className="font-pixel text-2xl sm:text-3xl text-white mt-1">
              Awards
            </h1>
          </div>
        </div>
        <span className="px-3.5 py-1.5 rounded-full text-xs font-display font-semibold bg-[#131C35] text-[#81D4FF] border border-[#3B5BDB]/50">
          UNLOCKED: {AWARDS_DATA.length + CERTIFICATIONS_DATA.length} /{" "}
          {AWARDS_DATA.length + CERTIFICATIONS_DATA.length}
        </span>
      </div>

      {selectedItem && (
        <div className="bento-card p-6 border-[#4D7CFE]/70 bg-gradient-to-r from-[#131C35] to-[#18264D] flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-[#0B1226] border border-[#4D7CFE]/60 flex items-center justify-center shrink-0">
            <AwardPixelIcon type={selectedItem.iconType} />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-display font-bold bg-[#4D7CFE]/20 text-[#81D4FF] border border-[#4D7CFE]/50">
                {selectedItem.type}
              </span>
              <span className="text-xs text-[#94A3B8]">
                {selectedItem.issuer} · {selectedItem.date}
              </span>
            </div>
            <h2 className="font-bold text-lg sm:text-xl text-white">
              {selectedItem.title}
            </h2>
            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              {selectedItem.detail}
            </p>
          </div>
        </div>
      )}

      <section className="space-y-4">
        <h2 className="font-display font-bold text-lg text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          수상 내역 (클릭하여 상세 확인)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AWARDS_DATA.map((item) => {
            const active = selectedItem?.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                className={`bento-card bento-card-interactive p-5 text-left flex items-start gap-4 ${
                  active ? "border-[#81D4FF] bg-[#18254A]" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D152C] border border-[#2B3E75] flex items-center justify-center shrink-0">
                  <AwardPixelIcon type={item.iconType} />
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-display text-[#81D4FF]">
                      ACHIEVEMENT UNLOCKED
                    </span>
                    <span className="text-[11px] text-[#94A3B8]">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-base text-white">{item.title}</h3>
                  <p className="text-xs text-[#94A3B8] line-clamp-2">{item.summary}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display font-bold text-lg text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-[#81D4FF]" />
          자격 및 SW 역량 평가 (클릭하여 상세 확인)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CERTIFICATIONS_DATA.map((item) => {
            const active = selectedItem?.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                className={`bento-card bento-card-interactive p-5 text-left flex items-start gap-3.5 ${
                  active ? "border-[#81D4FF] bg-[#18254A]" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#0D152C] border border-[#2B3E75] flex items-center justify-center shrink-0">
                  <AwardPixelIcon type={item.iconType} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-display text-[#A78BFA]">
                    {item.type}
                  </span>
                  <h3 className="font-bold text-base text-white">{item.title}</h3>
                  <p className="text-xs text-[#94A3B8]">{item.issuer}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

// 5-7. ACTIVITIES VIEW (스크롤 기반 순차 타임라인)
const ActivitiesView = () => {
  const [visibleIds, setVisibleIds] = useState({});
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) {
              setVisibleIds((prev) => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center gap-3">
        <BentoMenuIcon type="activities" />
        <div>
          <span className="font-display text-xs tracking-widest text-[#81D4FF] uppercase">
            EXPERIENCE TIMELINE
          </span>
          <h1 className="font-pixel text-2xl sm:text-3xl text-white mt-1">
            Activities
          </h1>
        </div>
      </div>

      <div className="relative pl-6 sm:pl-10 space-y-6 before:content-[''] before:absolute before:left-2.5 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#4D7CFE] before:via-[#81D4FF] before:to-[#A78BFA]">
        {ACTIVITIES_DATA.map((act, idx) => {
          const isVisible = visibleIds[act.id] ?? true;
          return (
            <div
              key={act.id}
              ref={(el) => (itemRefs.current[idx] = el)}
              data-id={act.id}
              style={{ transitionDelay: `${idx * 120}ms` }}
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span
                className={`absolute -left-[22px] sm:-left-[30px] top-6 w-3.5 h-3.5 rounded-sm border-2 ${
                  act.status === "ACTIVE"
                    ? "bg-[#81D4FF] border-white shadow-[0_0_12px_#81D4FF]"
                    : "bg-[#131C35] border-[#4D7CFE]"
                }`}
              />

              <div className="bento-card p-6 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-display font-semibold text-[#81D4FF]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{act.period}</span>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-display font-semibold ${
                      act.status === "ACTIVE"
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/40"
                        : "bg-[#1A274D] text-[#94A3B8] border border-[#2E427A]"
                    }`}
                  >
                    {act.status}
                  </span>
                </div>

                <div>
                  <h2 className="font-bold text-lg sm:text-xl text-white">
                    {act.title}
                  </h2>
                  <p className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    {act.role}
                  </p>
                </div>

                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {act.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {act.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs bg-[#0D152C] text-[#94A3B8] border border-[#243461]"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 5-8. SKILLS VIEW (게임 스킬트리 구조 + 클릭/호버 시 연관 프로젝트 및 활용 경험 표시)
const SkillsView = () => {
  const [selectedSkill, setSelectedSkill] = useState(
    SKILLS_DATA[0].skills[0]
  );

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center gap-3">
        <BentoMenuIcon type="skills" />
        <div>
          <span className="font-display text-xs tracking-widest text-[#81D4FF] uppercase">
            TECH SKILL TREE
          </span>
          <h1 className="font-pixel text-2xl sm:text-3xl text-white mt-1">
            Skills
          </h1>
        </div>
      </div>

      {selectedSkill && (
        <div className="bento-card p-6 border-[#4D7CFE]/70 bg-gradient-to-r from-[#131C35] to-[#17254B] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-lg bg-[#4D7CFE]/20 border border-[#4D7CFE]/50 font-display font-bold text-sm text-[#81D4FF]">
                {selectedSkill.name}
              </span>
              <span className="text-xs text-[#94A3B8]">
                기술 노드를 선택하면 활용 경험과 관련 프로젝트를 확인할 수 있습니다.
              </span>
            </div>
          </div>

          <p className="text-sm text-[#E2E8F0] leading-relaxed">
            {selectedSkill.experience}
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-semibold text-[#A78BFA]">
              연관 프로젝트 / 경험:
            </span>
            {selectedSkill.relatedProjects.map((proj) => (
              <span
                key={proj}
                className="px-3 py-1 rounded-full text-xs bg-[#0D152C] text-[#CBD5E1] border border-[#2C4078]"
              >
                {proj}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SKILLS_DATA.map((group, gIdx) => (
          <div key={group.category} className="bento-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#22325E] pb-3">
              <div>
                <span className="font-display text-[11px] text-[#81D4FF] uppercase">
                  BRANCH 0{gIdx + 1} · {group.subtitle}
                </span>
                <h2 className="font-display font-bold text-lg text-white">
                  {group.category}
                </h2>
              </div>
              <Code2 className="w-5 h-5 text-[#4D7CFE]" />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => {
                const isSelected = selectedSkill?.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onMouseEnter={() => setSelectedSkill(skill)}
                    onClick={() => setSelectedSkill(skill)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                      isSelected
                        ? "bg-[#1D3570] text-white border border-[#81D4FF] shadow-[0_0_14px_rgba(129,212,255,0.4)] -translate-y-0.5"
                        : "bg-[#0D152C] text-[#CBD5E1] border border-[#283A6E] hover:border-[#4D7CFE]"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-xs ${
                        isSelected ? "bg-[#81D4FF]" : "bg-[#4D7CFE]"
                      }`}
                    />
                    {skill.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 5-9. CONTACT VIEW (GitHub, Naver Blog, Email 연동)
const ContactView = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PROFILE_DATA.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="bento-card p-8 sm:p-12 text-center space-y-5 relative overflow-hidden">
        <PixelCloud className="absolute top-6 left-6 w-28 opacity-40 pointer-events-none" variant="blue" />
        <PixelCloud className="absolute bottom-6 right-6 w-28 opacity-40 pointer-events-none" variant="dark" />

        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-display font-semibold bg-[#182956] text-[#81D4FF] border border-[#4D7CFE]/50">
          GET IN TOUCH
        </span>

        <h1 className="font-pixel text-xl sm:text-3xl text-white leading-relaxed">
          {PROFILE_DATA.contact.title}
        </h1>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
          {PROFILE_DATA.contact.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4 text-left">
          {/* GitHub */}
          <a
            href={PROFILE_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card bento-card-interactive p-5 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0D152C] border border-[#2D4075] flex items-center justify-center group-hover:border-[#81D4FF] shrink-0">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-display text-[#81D4FF]">GITHUB</span>
              <p className="font-bold text-sm text-white truncate mt-0.5">
                github.com/yeseongho
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-white shrink-0" />
          </a>

          {/* Naver Blog */}
          <a
            href={PROFILE_DATA.contact.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="bento-card bento-card-interactive p-5 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0D152C] border border-[#2D4075] flex items-center justify-center group-hover:border-[#34D399] shrink-0">
              <BookOpen className="w-6 h-6 text-[#34D399]" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-display text-[#34D399]">NAVER BLOG</span>
              <p className="font-bold text-sm text-white truncate mt-0.5">
                blog.naver.com/tkdtkddmsdlfndjwlsek
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-white shrink-0" />
          </a>

          {/* Email */}
          <div className="bento-card p-5 flex items-center justify-between gap-3">
            <a
              href={`mailto:${PROFILE_DATA.contact.email}`}
              className="flex items-center gap-4 min-w-0 flex-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0D152C] border border-[#2D4075] flex items-center justify-center group-hover:border-[#81D4FF] shrink-0">
                <Mail className="w-6 h-6 text-[#81D4FF]" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-display text-[#A78BFA]">EMAIL</span>
                <p className="font-bold text-sm text-white truncate mt-0.5">
                  {PROFILE_DATA.contact.email}
                </p>
              </div>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#182956] hover:bg-[#223975] text-[#81D4FF] border border-[#4D7CFE]/40 shrink-0 transition-colors"
            >
              {copied ? "복사됨!" : "복사"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * 6. MAIN APP COMPONENT (전체 상태 및 레이아웃 통합)
 * ============================================================================
 */
export default function App() {
  const [isLoading, setIsLoading] = useState(() => {
    try {
      return !sessionStorage.getItem("sh_portfolio_loaded");
    } catch {
      return true;
    }
  });

  const [activePage, setActivePage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const handleLoadingComplete = () => {
    try {
      sessionStorage.setItem("sh_portfolio_loaded", "true");
    } catch {
      // sessionStorage 접근 제한 환경 무시
    }
    setIsLoading(false);
  };

  const handleNavigate = (page) => {
    setActivePage(page);
    if (page !== "project-detail") {
      setSelectedProject(null);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setActivePage("project-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#090E20] text-[#F1F5F9] retro-grid-bg flex flex-col selection:bg-[#4D7CFE] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Grotesk:wght@500;600;700&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

        body {
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
          background-color: #090E20;
          color: #F1F5F9;
          overflow-x: hidden;
        }

        .font-pixel {
          font-family: 'Press Start 2P', monospace;
        }

        .font-display {
          font-family: 'Space Grotesk', 'Pretendard', sans-serif;
        }

        .retro-grid-bg {
          background-image:
            linear-gradient(to right, rgba(77, 124, 254, 0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(77, 124, 254, 0.055) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        .bento-card {
          background: linear-gradient(155deg, rgba(22, 33, 64, 0.92) 0%, rgba(15, 23, 46, 0.96) 100%);
          border: 1.5px solid rgba(77, 124, 254, 0.42);
          border-radius: 18px;
          box-shadow:
            inset 0 0 0 1px rgba(167, 139, 250, 0.14),
            0 10px 28px -8px rgba(4, 8, 22, 0.75);
          backdrop-filter: blur(8px);
        }

        .bento-card-interactive {
          transition: transform 0.24s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.24s ease, box-shadow 0.24s ease;
        }

        .bento-card-interactive:hover {
          transform: translateY(-4px);
          border-color: rgba(129, 212, 255, 0.85);
          box-shadow:
            inset 0 0 0 1px rgba(129, 212, 255, 0.3),
            0 14px 32px -6px rgba(77, 124, 254, 0.32);
        }

        @keyframes pixelWave {
          0%, 100% {
            transform: translateY(0px);
          }
          30% {
            transform: translateY(-14px);
          }
          60% {
            transform: translateY(0px);
          }
        }

        .animate-pixel-wave {
          animation: pixelWave 1.4s ease-in-out infinite;
        }

        @keyframes walkAcross {
          0% {
            transform: translateX(12vw);
          }
          100% {
            transform: translateX(52vw);
          }
        }

        .animate-walk-across {
          animation: walkAcross 2.4s linear forwards;
        }

        @keyframes walkBob {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-walk-bob {
          animation: walkBob 0.35s ease-in-out infinite;
        }

        @keyframes heroFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .animate-hero-float {
          animation: heroFloat 2.8s ease-in-out infinite;
        }

        @keyframes heroBreathe {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-1.5px);
          }
        }

        .animate-hero-breathe {
          animation: heroBreathe 3.2s ease-in-out infinite;
        }

        @keyframes heroBlink {
          0%, 92%, 100% {
            transform: scaleY(1);
          }
          96% {
            transform: scaleY(0.1);
          }
        }

        .animate-hero-blink {
          animation: heroBlink 4.2s infinite;
        }

        @keyframes eatChopsticks {
          0%, 100% {
            transform: rotate(0deg) translate(0px, 0px);
          }
          50% {
            transform: rotate(-14deg) translate(-5px, -10px);
          }
        }

        .animate-eat-chopsticks {
          transform-origin: 140px 140px;
          animation: eatChopsticks 1.35s ease-in-out infinite;
        }

        @keyframes pageFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-page-fade {
          animation: pageFadeIn 0.28s ease-out forwards;
        }

        @keyframes fireworkParticle {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.4);
          }
          65% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1.15);
          }
        }

        .animate-firework-particle {
          opacity: 0;
          animation: fireworkParticle 1.15s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fireworkFlash {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.2);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(2.4);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.1);
          }
        }

        .animate-firework-flash {
          opacity: 0;
          animation: fireworkFlash 0.6s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-pixel-wave,
          .animate-walk-across,
          .animate-walk-bob,
          .animate-hero-float,
          .animate-hero-breathe,
          .animate-hero-blink,
          .animate-eat-chopsticks,
          .animate-page-fade,
          .animate-firework-particle,
          .animate-firework-flash {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* 최초 접속 웨이브 로딩 화면 */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* 상단 내비게이션 */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* 장식용 배경 픽셀 구름 */}
      <div className="relative flex-1 overflow-x-clip">
        <PixelCloud
          className="hidden xl:block absolute top-28 -left-6 w-36 opacity-50 pointer-events-none"
          variant="dark"
        />
        <PixelCloud
          className="hidden lg:block absolute top-72 -right-4 w-40 opacity-85 pointer-events-none"
          variant="blue"
        />

        {/* 메인 컨테이너 */}
        <main
          key={activePage + (selectedProject?.id || "")}
          className="max-w-6xl mx-auto px-4 sm:px-6 pt-7 sm:pt-9 animate-page-fade"
        >
          {activePage === "home" && (
            <HomeView
              onNavigate={handleNavigate}
              onSelectProject={handleSelectProject}
              onTriggerFireworks={() => setShowFireworks(true)}
            />
          )}
          {activePage === "about" && <AboutView onNavigate={handleNavigate} />}
          {activePage === "projects" && (
            <ProjectsView onSelectProject={handleSelectProject} />
          )}
          {activePage === "project-detail" && (
            <ProjectDetailView
              project={selectedProject}
              onBack={() => handleNavigate("projects")}
            />
          )}
          {activePage === "research" && <ResearchView />}
          {activePage === "awards" && <AwardsView />}
          {activePage === "activities" && <ActivitiesView />}
          {activePage === "skills" && <SkillsView />}
          {activePage === "contact" && <ContactView />}
        </main>
      </div>

      {/* 하단 푸터 */}
      <footer className="border-t border-[#182342] bg-[#070B1A]/90 py-6 px-4 sm:px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white">SH Portfolio</span>
            <span>·</span>
            <span>Modern Bento Grid &amp; Retro Pixel Art</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PROFILE_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#81D4FF] transition-colors"
            >
              GitHub
            </a>
            <a
              href={PROFILE_DATA.contact.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#34D399] transition-colors"
            >
              Blog
            </a>
            <button
              type="button"
              onClick={() => handleNavigate("contact")}
              className="hover:text-[#81D4FF] transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>

      {/* 캐릭터 5회 클릭 폭죽 효과 */}
      {showFireworks && (
        <FireworksEffect onComplete={() => setShowFireworks(false)} />
      )}
    </div>
  );
}