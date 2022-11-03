package stackoverflow.pre_project.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.exception.BusinessLogicException;
import stackoverflow.pre_project.exception.ExceptionCode;
import stackoverflow.pre_project.user.dto.UserProfileDto;
import stackoverflow.pre_project.user.entity.User;
import stackoverflow.pre_project.user.repository.UserRepository;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Transactional(readOnly = true)
    public UserProfileDto profile(long id, long userId) {//id는 본인, userId는 방문할페이지id
        UserProfileDto dto = new UserProfileDto();
        User Entity = userRepository.findById(userId).orElseThrow(() -> {
            throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
        });
        dto.setOwnerState(id == userId);
        dto.setUser(Entity);
        return dto;
    }

    @Transactional
    public User update(long id, User user, long userId) {
        if (id != userId) {
            throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
        }
        User userEntity = userRepository.findById(id).orElseThrow(() -> {
            throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
        });
        userEntity.setUsername(user.getUsername());
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);

        userEntity.setPassword(encPassword);
        userEntity.setMessage(user.getMessage());
        return userEntity;
    }

    @Transactional(readOnly = true)
    public Page<User> pageList(Pageable pageable) {
        return userRepository.findAll(pageable);
    }
}
