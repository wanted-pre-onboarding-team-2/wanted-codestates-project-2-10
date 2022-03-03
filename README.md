# 구현 방법

## api url의 사용

- REACT_APP_BASE_URL라는 이름으로 baseURL을 .env에 저장하여 사용했습니다.

## dropdown의 갯수

- 예시 페이지에서 7개의 데이터만 보여지기 때문에 7개의 데이터만 slice해서 사용했습니다.

## API 호출 최적화

- debounce
    - input에 change Event가 발생한다면 디바운싱을 500ms로 설정하여 연속되는 이벤트에 대해서는 처리를 하지 않도록 하였습니다.
- cache 구현
    - searchStore에는 ```{ name: null, wordList: null, minute: null }``` 과 같은 형태의 배열로 데이터가 저장이 됩니다.
    - 따라서 저장된 시점의 minute과 현재 inputChange의 minute을 비교합니다.
        - 만약 5분 이상의 차이가 발생한다면
            - store에 저장되어있는 값을 삭제한 다음 데이터를 새로 불러오고, store에 저장합니다.
        - 차이가 5분 이내라면
            - api호출을 하지 않고 기존의 store에 있는 값을 사용합니다.

## useClickAway훅

dropdown외의 영역에 클릭 이벤트가 발생한다면 dropdown이 닫혀야 합니다.

따라서 useClickAway훅을 사용하였습니다.

dropdown영역안에 클릭이벤트가 발생한 엘리먼트가 존재하지 않는다면 바깥쪽 부분을 클릭했다고 정의할 수 있습니다.

위의 로직을 구현하여 사용했습니다.

## 어려웠던 부분

### lruCache의 사용

- 사용 이유
    
    원래 캐싱처리의 부분은 lru-cache를 직접 구현하여 사용하려 했습니다. 
    
    lru-cache의 경우 가장 최신에 사용된 값은 가장 나중에 삭제되도록 구현이 됩니다.
    
    즉 max-size가 2이고, a,b,a,c의 순으로 들어온다면 b가 삭제 되고 a c 가 존재하게 됩니다.
    
    자주 사용하는 것들은 계속 캐쉬에 보관하고 있기 때문에 유리한 전략이라 생각했습니다.
    
- 에러 핸들링
    
    하지만 구현 후 redux store에 lruCache의 인스턴스를 저장하였더니 ```A non-serializable value was detected in the state``` 과 같은 에러가 발생했습니다.
    
    즉 직렬화할 수 없는 값은 store에 저장을 하지 못한다는 에러입니다.
    
- 해결 방법
    
    따라서 lru-cache를 사용하는 대신 minute이라는 프로퍼티로 데이터가 들어왔을 때의 분을 기록했습니다.
    
    다음으로 같은 데이터가 들어온다면 minute을 비교하여 5분 이내라면 store에서 삭제하는 동작을 수행하였습니다.
    
    store에서 lru-cache와 유사하게 가중치를 비교해서 가장 낮은 것을 삭제하는 방법까지 구현할 수 있었지만, 기능에 비해 너무 과도한 코드가 생길것 같아 이 부분은 구현하지 않았습니다.
    

현재 구현되어있는 부분은 ```src/AutoComplete/lruCache``` 에서 확인할 수 있습니다.

## 구현 순서

1. mock data를 만들어 api통신없이 input에 해당하는 값이 mock data에 있다면 dropdown을 보여준다.
2. 키보드 이벤트(arrowUp /  arrowDown)가 발생한다면 dropdown을 보여준다.
3. mock data 대신 api를 연결한다.
4. redux store를 통해 값을 저장한다.
5. 캐싱을 구현한다.
6. 디바운싱을 구현한다.

# 시연 영상
[참고] 마지막에 cacheMinute을 2로 해서 조금 건너 뛴다면 redux에서 데이터를 삭제하는것을 확인할 수 있습니다.

https://user-images.githubusercontent.com/70435257/156324039-f81db1bd-af1b-4308-9d49-c44b774ed37d.mp4


# 팀원들 구현 사항

| 이름         | 깃허브                                        | 레포 주소 |
| ------------ | --------------------------------------------- | --- |
| 강동진       | [jinn2u](https://github.com/jinn2u)           | https://github.com/jinn2u/wanted-2-10 |
| 박상우       | [SangWoo9734](https://github.com/SangWoo9734) |  |
| 신항민       | [ssinking91](https://github.com/ssinking91)   | |
| 이장민       | [leo-xee](https://github.com/leo-xee)         | |
| 오카무라카에 | [kaehehehe](https://github.com/kaehehehe)     | https://github.com/kaehehehe/wanted-codestates-project-2-10| 
| 허민         | [hhhminme](https://github.com/hhhminme)       | |
| 전호용       | [mooroom](https://github.com/mooroom)         | |
