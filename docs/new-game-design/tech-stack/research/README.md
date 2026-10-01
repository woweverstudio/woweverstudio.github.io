# 조사 노트

「도깨비 방범대」 기술 스택 문서([../README.md](../README.md))의 근거가 된 조사 노트다. 노트는 영문이며, 사실마다 출처 번호와 검증 상태를 붙였다. 조사일은 2026년 10월 1일이다.

| 파일 | 분야 | 출처 |
|---|---|---|
| [T1_engine_netcode.md](T1_engine_netcode.md) | 엔진 비교, 결정론 시뮬레이션과 고정 소수점, 협동 네트워크(릴레이·Photon·Unity Relay), 저사양 기기 기준 | 52건 |
| [T2_backend_liveops.md](T2_backend_liveops.md) | 게임 백엔드(Nakama·Hiro·PlayFab·UGS·Firebase 등), 라이브옵스·실험 도구, 데이터 창고, 어트리뷰션 | 69건 |
| [T3_payments_ops_compliance.md](T3_payments_ops_compliance.md) | 스토어 결제와 서버 검증, 한국 결제·세금, 웹 상점, 연령 확인과 미성년자 보호, 앱 무결성, 개발 운영 도구 | 100건 |
| [T4_writing_checks.md](T4_writing_checks.md) | 본문을 쓰고 검토하며 추가로 확인한 페이지: Nakama 결제 알림, 환불 심사 API, 한국 수수료 개편, CI·테스트 도구 가격, Cloud Run 가격, EU KIDS Act | 17건 |

## 검증 표시

- **V**: 공식 문서나 원문(가격 페이지, 법령, 개발자 문서)을 직접 읽고 확인했다.
- **S**: 기사, 블로그, 법률 사무소 정리처럼 2차 자료로 확인했다.
- **U**: 확인하지 못했다. 본문에서는 근거로 쓰지 않았거나 확인하지 못했다고 밝혔다.
- **A**(T2): 출처가 아니라 조사자의 판단이다. T1에서는 표시 없는 문장이 판단이다.

가격과 정책은 자주 바뀐다. 계약이나 출시 일정을 정하기 전에 각 출처를 다시 확인한다.
