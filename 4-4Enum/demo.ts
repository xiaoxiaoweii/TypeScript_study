enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
  ERROR
}

/* 
enum Status {
  OFFLINE = 1,
  ONLINE,
  DELETED,
  ERROR
} */

/* const Status = {
  OFFLINE: 0,
  ONLINE: 1,
  DELETED: 2,
  ERROR: 3
} */

/* function getResult(status) {
  if (status === 0) {
    return 'offline';
  } else if (status === 1) {
    return 'online';
  } else if (status === 2) {
    return 'deleted'
  }
  return 'error'
} */

function getResult(status) {
  if (status === Status.OFFLINE) {
    return 'offline';
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted'
  }
  return 'error'
}

const result = getResult(Status.OFFLINE)
console.log(result)