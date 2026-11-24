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

// 메인 히어로 캐릭터 (치비 일러스트 스타일 + 클릭 인사 말풍선 + 12~13/17~18시 식사 모션 + 23:00~08:00 수면 모션)
// 참조 원본 PNG 내장: 별도 이미지 파일이나 외부 URL 불필요
const HERO_REFERENCE_IMAGE = "data:image/png;base64,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";

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
  const isSleeping = currentMode === "sleeping";
  const isEating = currentMode === "eating";

  const handleCycleMode = () => {
    const order = ["coding", "eating", "sleeping"];
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
      {/* 클릭 시 나타나는 인사 말풍선 */}
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

      {/* 배경 발광 */}
      <div className="absolute w-72 h-72 rounded-full bg-[#4D7CFE]/15 blur-3xl pointer-events-none" />

      <button
        type="button"
        onClick={handleClick}
        aria-label="예성호 일러스트 캐릭터 (클릭 시 인사, 5번 클릭 시 폭죽)"
        className="relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#81D4FF] rounded-3xl p-1 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
      >
        {!isSleeping && !isEating ? (
          <div className="relative w-[260px] h-[225px] sm:w-[300px] sm:h-[260px] flex items-center justify-center">
            <img
              src={HERO_REFERENCE_IMAGE}
              alt="헤드폰을 쓰고 노트북으로 코딩하는 픽셀 개발자와 흰 고양이"
              draggable={false}
              className="w-full h-full object-contain drop-shadow-[0_14px_28px_rgba(5,10,28,0.5)]"
              style={{
                imageRendering: "pixelated",
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 77%, 11% 77%, 11% 60%, 0 60%, 0 30%, 10% 30%)",
                maskImage: "radial-gradient(ellipse 85% 85% at 55% 60%, black 65%, transparent 100%)",
              }}
            />
          </div>
        ) : (
        <svg
          viewBox="0 0 260 225"
          className="w-[260px] h-[225px] sm:w-[300px] sm:h-[260px] drop-shadow-[0_14px_28px_rgba(5,10,28,0.85)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hairGrad" x1="80" y1="30" x2="170" y2="125" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E294B" />
              <stop offset="60%" stopColor="#11182F" />
              <stop offset="100%" stopColor="#090D1C" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="95" y1="80" x2="155" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFE9D6" />
              <stop offset="100%" stopColor="#F5C9AC" />
            </linearGradient>
            <linearGradient id="hoodieBlue" x1="115" y1="125" x2="185" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4D8BFF" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="laptopLid" x1="35" y1="138" x2="112" y2="186" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B4D7A" />
              <stop offset="50%" stopColor="#1E294B" />
              <stop offset="100%" stopColor="#11182E" />
            </linearGradient>
            <linearGradient id="headsetCup" x1="145" y1="80" x2="178" y2="118" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="riceBowlGrad" x1="78" y1="142" x2="118" y2="164" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4D7CFE" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 주변 십자 별 반짝임 */}
          <g className="animate-pulse">
            <circle cx="64" cy="34" r="10" fill="url(#starGlow)" />
            <path d="M64 25V43M55 34H73" stroke="#93C5FD" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M138 18V28M133 23H143" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round" />
            <path d="M26 112V124M20 118H32" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            <circle cx="222" cy="144" r="11" fill="url(#starGlow)" />
            <path d="M222 134V154M212 144H232" stroke="#60A5FA" strokeWidth="2.4" strokeLinecap="round" />
          </g>

          {/* 좌측 작은 풀잎 */}
          <g transform="translate(8, 196)">
            <path d="M4 12C4 7 7 5 9 12" fill="#22C55E" />
            <path d="M10 12C10 4 14 2 16 12" fill="#4ADE80" />
            <path d="M16 12C17 7 20 6 21 12" fill="#16A34A" />
          </g>

          {/* 상태 말풍선: 수면('자는 중..') / 식사('밥먹는 중 !') / 개발(하트 말풍선) */}
          {isSleeping ? (
            <g className="animate-hero-float">
              <rect
                x="156"
                y="24"
                width="84"
                height="34"
                rx="12"
                fill="#131C35"
                stroke="#81D4FF"
                strokeWidth="2.2"
              />
              <path
                d="M174 58L168 67L184 58"
                fill="#131C35"
                stroke="#81D4FF"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <path d="M172 57.5H185" stroke="#131C35" strokeWidth="2.8" />
              <text
                x="198"
                y="45"
                textAnchor="middle"
                fill="#E0F2FE"
                fontSize="12"
                fontWeight="700"
                fontFamily="Pretendard, sans-serif"
              >
                자는 중..
              </text>
              <text
                x="138"
                y="54"
                fill="#81D4FF"
                fontSize="13"
                fontWeight="800"
                fontFamily="Space Grotesk, sans-serif"
              >
                Z
              </text>
              <text
                x="148"
                y="42"
                fill="#A78BFA"
                fontSize="10"
                fontWeight="800"
                fontFamily="Space Grotesk, sans-serif"
              >
                z
              </text>
            </g>
          ) : isEating ? (
            <g className="animate-hero-float">
              <rect
                x="152"
                y="24"
                width="92"
                height="34"
                rx="12"
                fill="#131C35"
                stroke="#FBBF24"
                strokeWidth="2.2"
              />
              <path
                d="M174 58L168 67L184 58"
                fill="#131C35"
                stroke="#FBBF24"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <path d="M172 57.5H185" stroke="#131C35" strokeWidth="2.8" />
              <text
                x="198"
                y="45"
                textAnchor="middle"
                fill="#FEF3C7"
                fontSize="12"
                fontWeight="700"
                fontFamily="Pretendard, sans-serif"
              >
                밥먹는 중 !
              </text>
            </g>
          ) : (
            <g className="animate-hero-float">
              <rect
                x="174"
                y="34"
                width="48"
                height="42"
                rx="12"
                fill="#FFFFFF"
                stroke="#0F172A"
                strokeWidth="2.5"
              />
              <path
                d="M188 76L185 86L197 76"
                fill="#FFFFFF"
                stroke="#0F172A"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path d="M186.5 75.5H198" stroke="#FFFFFF" strokeWidth="3" />
              <path
                d="M198 64.5C198 64.5 186 56.5 186 49.5C186 45.8 188.9 43 192.5 43C195 43 197 44.4 198 46.5C199 44.4 201 43 203.5 43C207.1 43 210 45.8 210 49.5C210 56.5 198 64.5 198 64.5Z"
                fill="#F43F5E"
                stroke="#0F172A"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </g>
          )}

          {/* 바닥 그림자 */}
          <ellipse cx="132" cy="208" rx="108" ry="6" fill="#050917" opacity="0.85" />

          {/* 캐릭터 본체 */}
          <g className={isSleeping ? "" : "animate-hero-breathe"}>
            {/* 파란 백팩 */}
            <path
              d="M156 132C171 132 181 143 181 160C181 174 173 184 160 184H150V132H156Z"
              fill="url(#hoodieBlue)"
              stroke="#0F172A"
              strokeWidth="2.5"
            />
            <path
              d="M167 142C172 146 174 154 173 166"
              stroke="#93C5FD"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* 앉은 다리 & 신발 */}
            <path
              d="M72 184C60 184 52 191 52 199C52 204 58 207 68 207H154C164 207 170 203 170 197C170 189 160 184 146 184H72Z"
              fill="#1E294B"
              stroke="#0F172A"
              strokeWidth="2.5"
            />
            <ellipse
              cx="116"
              cy="197"
              rx="18"
              ry="10"
              fill="#27355E"
              stroke="#0F172A"
              strokeWidth="2.2"
            />

            {/* 상체 화이트 & 블루 후드 */}
            <path
              d="M94 134C94 126 105 122 126 122C147 122 158 128 158 140V182C158 186 153 188 145 188H102C95 188 92 184 92 178L94 134Z"
              fill="#F8FAFC"
              stroke="#0F172A"
              strokeWidth="2.5"
            />
            <path
              d="M100 130C106 138 118 141 132 140C146 139 156 134 159 127C162 121 153 117 140 118H108C100 118 96 124 100 130Z"
              fill="url(#hoodieBlue)"
              stroke="#0F172A"
              strokeWidth="2.3"
            />
            <path
              d="M117 139V174M128 140V174"
              stroke="#60A5FA"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {isSleeping ? (
              /* 수면 모션: 팔을 모으고 고개를 숙여 잠든 자세 */
              <g>
                <path
                  d="M96 156C106 150 134 150 144 158C149 162 146 171 136 171H102C93 171 91 161 96 156Z"
                  fill="#F1F5F9"
                  stroke="#0F172A"
                  strokeWidth="2.4"
                />
                <g transform="translate(-4, 14) rotate(-8 125 100)">
                  <path
                    d="M84 94C84 74 102 62 126 62C148 62 162 75 162 96C162 118 148 130 123 130C98 130 84 117 84 94Z"
                    fill="url(#skinGrad)"
                    stroke="#0F172A"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M94 104C97 108 103 108 106 104"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M122 104C125 108 131 108 134 104"
                    stroke="#0F172A"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <ellipse cx="95" cy="112" rx="5.5" ry="3" fill="#FDA4AF" opacity="0.65" />
                  <ellipse cx="132" cy="112" rx="5.5" ry="3" fill="#FDA4AF" opacity="0.65" />
                  <circle cx="113" cy="115" r="2.2" fill="#B45309" />

                  <path
                    d="M78 96C75 76 84 56 104 47C98 46 92 47 86 50C93 41 107 37 123 38C146 39 167 53 173 74C178 89 175 105 166 114C164 103 160 95 154 91C150 96 144 98 137 96C132 89 125 85 117 86C112 93 105 96 97 95C91 90 85 91 78 96Z"
                    fill="url(#hairGrad)"
                    stroke="#0F172A"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M106 39C128 36 154 50 160 79"
                    stroke="#F8FAFC"
                    strokeWidth="6.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M106 39C128 36 154 50 160 79"
                    stroke="#0F172A"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="159"
                    cy="95"
                    rx="13"
                    ry="16"
                    fill="url(#headsetCup)"
                    stroke="#0F172A"
                    strokeWidth="2.4"
                  />
                </g>
              </g>
            ) : isEating ? (
              /* 식사 모션 (12:00~13:00, 17:00~18:00): 행복한 웃음 + 밥그릇 & 젓가락질 */
              <g>
                {/* 얼굴 */}
                <path
                  d="M84 94C84 74 102 62 126 62C148 62 162 75 162 96C162 118 148 130 123 130C98 130 84 117 84 94Z"
                  fill="url(#skinGrad)"
                  stroke="#0F172A"
                  strokeWidth="2.5"
                />

                {/* 기분 좋게 휘어진 반달 웃음 눈 */}
                <path
                  d="M93 103C96 98 102 98 105 103"
                  stroke="#0F172A"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                <path
                  d="M121 103C124 98 130 98 133 103"
                  stroke="#0F172A"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />

                {/* 발그레한 볼터치 & 맛있게 먹는 입 */}
                <ellipse cx="94" cy="111" rx="5.5" ry="3" fill="#FDA4AF" opacity="0.72" />
                <ellipse cx="132" cy="111" rx="5.5" ry="3" fill="#FDA4AF" opacity="0.72" />
                <ellipse
                  cx="113"
                  cy="115"
                  rx="4.2"
                  ry="3.2"
                  fill="#F43F5E"
                  stroke="#0F172A"
                  strokeWidth="1.6"
                />

                {/* 헤어스타일 */}
                <path
                  d="M78 96C75 76 84 56 104 47C98 46 92 47 86 50C93 41 107 37 123 38C146 39 167 53 173 74C178 89 175 105 166 114C164 103 160 95 154 91C150 96 144 98 137 96C132 89 125 85 117 86C112 93 105 96 97 95C91 90 85 91 78 96Z"
                  fill="url(#hairGrad)"
                  stroke="#0F172A"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M84 68C87 60 94 54 102 52"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.7"
                />

                {/* 흰색 오버이어 헤드셋 */}
                <path
                  d="M106 39C128 36 154 50 160 79"
                  stroke="#F8FAFC"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                />
                <path
                  d="M106 39C128 36 154 50 160 79"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="159"
                  cy="95"
                  rx="13"
                  ry="16"
                  fill="url(#headsetCup)"
                  stroke="#0F172A"
                  strokeWidth="2.4"
                />
                <ellipse
                  cx="156"
                  cy="95"
                  rx="7.5"
                  ry="10"
                  fill="#E2E8F0"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                />

                {/* 왼손으로 받쳐 든 따끈한 밥그릇 */}
                <g>
                  {/* 고봉 흰쌀밥 */}
                  <path
                    d="M81 144C84 133 112 133 115 144Z"
                    fill="#FFFFFF"
                    stroke="#0F172A"
                    strokeWidth="2.2"
                  />
                  {/* 밥그릇 본체 */}
                  <path
                    d="M78 144H118C117 156 109 162 98 162C87 162 79 156 78 144Z"
                    fill="url(#riceBowlGrad)"
                    stroke="#0F172A"
                    strokeWidth="2.3"
                  />
                  <path d="M81 149H115" stroke="#3B82F6" strokeWidth="2.2" />
                  {/* 모락모락 김 애니메이션 */}
                  <path
                    d="M90 130C88 125 92 121 90 116"
                    stroke="#E2E8F0"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  <path
                    d="M105 129C103 124 107 120 105 115"
                    stroke="#E2E8F0"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  {/* 왼손 */}
                  <ellipse
                    cx="85"
                    cy="155"
                    rx="7"
                    ry="5.5"
                    fill="url(#skinGrad)"
                    stroke="#0F172A"
                    strokeWidth="2"
                  />
                </g>

                {/* 오른팔 & 젓가락질 애니메이션 */}
                <g className="animate-eat-chopsticks">
                  <path
                    d="M140 140C150 143 151 154 139 156L127 155"
                    fill="#F8FAFC"
                    stroke="#0F172A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* 젓가락 */}
                  <line
                    x1="128"
                    y1="152"
                    x2="101"
                    y2="137"
                    stroke="#D97706"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="127"
                    y1="156"
                    x2="100"
                    y2="142"
                    stroke="#B45309"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  {/* 오른손 */}
                  <circle
                    cx="127"
                    cy="154"
                    r="6"
                    fill="url(#skinGrad)"
                    stroke="#0F172A"
                    strokeWidth="2"
                  />
                </g>
              </g>
            ) : (
              /* 평상시 코딩 모션 */
              <g>
                {/* 오른팔 및 손 */}
                <path
                  d="M140 140C151 142 156 153 152 164C148 172 135 173 118 171"
                  fill="#F8FAFC"
                  stroke="#0F172A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="113"
                  cy="170"
                  rx="8"
                  ry="6"
                  fill="url(#skinGrad)"
                  stroke="#0F172A"
                  strokeWidth="2"
                />

                {/* 얼굴 */}
                <path
                  d="M84 94C84 74 102 62 126 62C148 62 162 75 162 96C162 118 148 130 123 130C98 130 84 117 84 94Z"
                  fill="url(#skinGrad)"
                  stroke="#0F172A"
                  strokeWidth="2.5"
                />

                {/* 깜빡이는 큰 눈 */}
                <g className="animate-hero-blink" style={{ transformOrigin: "114px 102px" }}>
                  <rect x="94" y="94" width="10" height="15" rx="5" fill="#0F172A" />
                  <circle cx="97" cy="98" r="2.2" fill="#FFFFFF" />
                  <rect x="122" y="94" width="10" height="15" rx="5" fill="#0F172A" />
                  <circle cx="125" cy="98" r="2.2" fill="#FFFFFF" />
                </g>

                {/* 볼터치 & 미소 */}
                <ellipse cx="94" cy="112" rx="5" ry="2.8" fill="#FDA4AF" opacity="0.6" />
                <ellipse cx="132" cy="112" rx="5" ry="2.8" fill="#FDA4AF" opacity="0.6" />
                <path
                  d="M110 114C112 116.5 116 116.5 118 114"
                  stroke="#9A3412"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                {/* 헤어스타일 */}
                <path
                  d="M78 96C75 76 84 56 104 47C98 46 92 47 86 50C93 41 107 37 123 38C146 39 167 53 173 74C178 89 175 105 166 114C164 103 160 95 154 91C150 96 144 98 137 96C132 89 125 85 117 86C112 93 105 96 97 95C91 90 85 91 78 96Z"
                  fill="url(#hairGrad)"
                  stroke="#0F172A"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M84 68C87 60 94 54 102 52"
                  stroke="#FFFFFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <ellipse cx="114" cy="54" rx="5" ry="2.5" fill="#6366F1" opacity="0.55" />
                <ellipse cx="127" cy="55" rx="4" ry="2" fill="#6366F1" opacity="0.45" />

                {/* 흰색 오버이어 헤드셋 */}
                <path
                  d="M106 39C128 36 154 50 160 79"
                  stroke="#F8FAFC"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                />
                <path
                  d="M106 39C128 36 154 50 160 79"
                  stroke="#0F172A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="159"
                  cy="95"
                  rx="13"
                  ry="16"
                  fill="url(#headsetCup)"
                  stroke="#0F172A"
                  strokeWidth="2.4"
                />
                <ellipse
                  cx="156"
                  cy="95"
                  rx="7.5"
                  ry="10"
                  fill="#E2E8F0"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                />
              </g>
            )}

            {/* 노트북 (식사 중일 때는 덮어서 옆에 내려둔 상태, 코딩/수면 중일 때는 펼쳐진 상태) */}
            {isEating ? (
              <g>
                {/* 덮어서 책상 바닥에 내려둔 슬림 노트북 */}
                <rect
                  x="26"
                  y="181"
                  width="66"
                  height="6"
                  rx="3"
                  fill="#3B4D7A"
                  stroke="#0F172A"
                  strokeWidth="2.2"
                />
                <rect
                  x="24"
                  y="187"
                  width="70"
                  height="5"
                  rx="2.5"
                  fill="#94A3B8"
                  stroke="#0F172A"
                  strokeWidth="2"
                />
                <line
                  x1="32"
                  y1="183.5"
                  x2="86"
                  y2="183.5"
                  stroke="#93C5FD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
            ) : (
              <g>
                <rect
                  x="44"
                  y="183"
                  width="82"
                  height="6"
                  rx="3"
                  fill="#94A3B8"
                  stroke="#0F172A"
                  strokeWidth="2"
                />
                <path
                  d="M34 140C34 136 37 134 41 134H105C109 134 112 136 113 140L118 183H40L34 140Z"
                  fill="url(#laptopLid)"
                  stroke="#0F172A"
                  strokeWidth="2.5"
                />
                <path
                  d="M39 137H106"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* 노트북 화면 코드 심볼 </> */}
                <path
                  d="M64 153L56 159L64 165M88 153L96 159L88 165M79 151L73 167"
                  stroke={isSleeping ? "#64748B" : "#E0F2FE"}
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            )}
          </g>

          {/* 우측 엎드린 흰 고양이 */}
          <g transform="translate(174, 166)">
            <ellipse cx="32" cy="39" rx="28" ry="4" fill="#050917" opacity="0.7" />
            <path
              d="M52 33C60 33 65 29 64 24C63 20 58 21 56 25"
              stroke="#F8FAFC"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M52 33C60 33 65 29 64 24C63 20 58 21 56 25"
              stroke="#0F172A"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M14 22C14 14 24 11 36 12C48 13 55 20 55 29C55 35 49 38 38 38H14C8 38 5 34 6 29C7 24 11 22 14 22Z"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="2.2"
            />
            <path
              d="M8 16L6 4L16 10M28 16L32 4L22 10"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path d="M9 13L8 7L14 11" fill="#FBCFE8" />
            <path d="M27 13L29 7L23 11" fill="#FBCFE8" />
            <ellipse
              cx="19"
              cy="20"
              rx="14"
              ry="11"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="2.2"
            />
            <path
              d="M11 20C12.5 21.5 14.5 21.5 16 20M22 20C23.5 21.5 25.5 21.5 27 20"
              stroke="#0F172A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <ellipse cx="10" cy="23" rx="3" ry="1.8" fill="#FDA4AF" opacity="0.7" />
            <ellipse cx="28" cy="23" rx="3" ry="1.8" fill="#FDA4AF" opacity="0.7" />
            <path
              d="M17 23.5L19 25L21 23.5"
              stroke="#0F172A"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <ellipse
              cx="10"
              cy="35"
              rx="6"
              ry="3.5"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="2"
            />
            <ellipse
              cx="24"
              cy="35"
              rx="6"
              ry="3.5"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="2"
            />
          </g>
        </svg>
        )}
      </button>

      {/* 현재 시간대 모드 표시 및 미리보기 토글 */}
      <div className="mt-1 flex items-center gap-2">
        <button
          type="button"
          onClick={handleCycleMode}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131C35]/90 border border-[#3B5BDB]/40 text-[11px] text-[#94A3B8] hover:text-white hover:border-[#81D4FF]/60 transition-colors"
          title="12:00~13:00, 17:00~18:00 식사 / 23:00~08:00 수면 자동 전환 · 클릭하여 모션 미리보기 전환"
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